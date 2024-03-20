import { useCallback, useEffect, useMemo, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatFile, Reorder } from "./types";
import { reorder } from "./utils";
type ChatAction =
  | {
      type: "createFolder";
      payload: string;
    }
  | {
      type: "createText";
      payload: string;
    }
  | {
      type: "addFileToFolder";
      payload: string;
    }
  | {
      type: "deleteFolder";
      payload: string;
    }
  | {
      type: "changeFolderName";
      payload: {
        id: string;
        name: string;
      };
    }
  | {
      type: "attachFile";
      payload: string;
    }
  | {
      type: "editFile";
      payload: {
        id: string;
        name: string;
        parentId: string | null;
      };
    }
  | {
      type: "deleteFile";
      payload: {
        id: string;
        parentId: string | null;
      };
    }
  | {
      type: "reorder";
      payload: Reorder;
    };

interface ChatState {
  chats: ChatFile[];
  attached: string[];
  chatList: string[];
}
const reducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case "createFolder": {
      const folder = createChatFolderBlank(action.payload);
      return {
        ...state,
        chats: [...state.chats, folder],
        chatList: [...state.chatList, folder.id],
      };
    }
    case "createText": {
      const text = createChatTextBlank(action.payload);
      return {
        ...state,
        chats: [...state.chats, text],
        chatList: [...state.chatList, text.id],
      };
    }
    case "addFileToFolder": {
      const chats = [...state.chats];
      const folderIndex = chats.findIndex(({ id }) => {
        return id == action.payload;
      });
      const newFile = createChatTextBlank("Новый файл");
      chats[folderIndex].children = [...chats[folderIndex].children, newFile];

      return {
        ...state,
        chats: chats,
      };
    }
    case "deleteFolder": {
      return {
        ...state,
        chats: [...state.chats.filter(({ id }) => id != action.payload)],
        chatList: [...state.chatList.filter((id) => id != action.payload)],
        attached: [...state.attached.filter((id) => id != action.payload)],
      };
    }
    case "changeFolderName": {
      const chats = [...state.chats];
      const folderIndex = chats.findIndex(({ id }) => {
        return id == action.payload.id;
      });
      chats[folderIndex].name = action.payload.name;
      return {
        ...state,
        chats,
      };
    }
    case "editFile": {
      const chats = [...state.chats];
      if (action.payload.parentId) {
        const topID = chats.findIndex(
          ({ id }) => id == action.payload.parentId
        );
        const innerID = chats[topID].children.findIndex(
          ({ id }) => id == action.payload.id
        );

        chats[topID].children[innerID].name = action.payload.name;
      } else {
        const topID = chats.findIndex(({ id }) => id == action.payload.id);
        chats[topID].name = action.payload.name;
      }
      return {
        ...state,
        chats,
      };
    }
    case "deleteFile": {
      const chats = [...state.chats];
      if (action.payload.parentId) {
        const topID = chats.findIndex(
          ({ id }) => id == action.payload.parentId
        );
        const innerID = chats[topID].children.findIndex(
          ({ id }) => id == action.payload.id
        );

        chats[topID].children.splice(innerID, 1);
      }

      if (!action.payload.parentId) {
        const topID = chats.findIndex(
          ({ id }) => id == action.payload.parentId
        );

        chats.splice(topID, 1);

        return {
          ...state,
          chats,
          chatList: [
            ...state.chatList.filter((id) => id != action.payload.parentId),
          ],
          attached: [
            ...state.attached.filter((id) => id != action.payload.parentId),
          ],
        };
      }

      return {
        ...state,
        chats,
      };
    }

    case "attachFile": {
      if (state.attached.includes(action.payload)) {
        return {
          ...state,
          attached: [...state.attached.filter((id) => id != action.payload)],
          chatList: [...state.chatList, action.payload],
        };
      }
      return {
        ...state,
        attached: [...state.attached, action.payload],
        chatList: [...state.chatList.filter((id) => id != action.payload)],
      };
    }

    case "reorder": {
      if (
        action.payload.source.droppableId ==
          action.payload.destination.droppableId &&
        action.payload.source.droppableId == "attached"
      ) {
        const attached = reorder(
          [...state.attached],
          action.payload.source.index,
          action.payload.destination.index
        );

        return { ...state, attached };
      }

      if (
        action.payload.source.droppableId ==
          action.payload.destination.droppableId &&
        action.payload.source.droppableId == "chats"
      ) {
        const chatList = reorder(
          [...state.chatList],
          action.payload.source.index,
          action.payload.destination.index
        );

        return { ...state, chatList };
      }
      if (
        action.payload.source.droppableId !=
          action.payload.destination.droppableId &&
        action.payload.source.droppableId == "chats"
      ) {
        const attached = [...state.attached];
        return {
          ...state,
          chatList: [
            ...state.chatList.filter((id) => id != action.payload.draggableId),
          ],
          attached: [
            ...attached.splice(0, action.payload.destination.index),
            action.payload.draggableId,
            ...attached.splice(action.payload.destination.index),
          ],
        };
      }

      if (
        action.payload.source.droppableId !=
          action.payload.destination.droppableId &&
        action.payload.source.droppableId == "attached"
      ) {
        const chatList = [...state.chatList];
        return {
          ...state,
          attached: [
            ...state.attached.filter((id) => id != action.payload.draggableId),
          ],
          chatList: [
            ...chatList.splice(0, action.payload.destination.index),
            action.payload.draggableId,
            ...chatList.splice(action.payload.destination.index),
          ],
        };
      }

      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export const useChatList = () => {
  const initial = useMemo(() => {
    const localStorageState = localStorage.getItem("chats");

    return localStorageState
      ? JSON.parse(localStorageState)
      : {
          chats: [],
          attached: [],
          chatList: [],
        };
  }, []);
  const [state, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(state));
  }, [state]);
  const createFolder = useCallback((data: string) => {
    dispatch({
      type: "createFolder",
      payload: data,
    });
  }, []);

  const createText = (data: string) => {
    dispatch({
      type: "createText",
      payload: data,
    });
  };

  const addFileToFolder = useCallback((data: string) => {
    dispatch({
      type: "addFileToFolder",
      payload: data,
    });
  }, []);

  const isFolder = (id: string) => {
    return state.chats.filter((chat) => chat.id == id)[0].type == "folder";
  };
  const deleteFolder = (id: string) => {
    dispatch({
      type: "deleteFolder",
      payload: id,
    });
  };

  const changeFolderName = (data: { name: string; id: string }) => {
    dispatch({
      type: "changeFolderName",
      payload: data,
    });
  };

  const attachFile = (id: string) => {
    dispatch({
      type: "attachFile",
      payload: id,
    });
  };

  const getAttachFiles = () => {
    return state.attached
      .map((file) => {
        return state.chats.filter(({ id }) => id == file)[0];
      })
      .filter(Boolean);
  };

  const getChatList = () => {
    return state.chatList
      .map((file) => {
        return state.chats.filter(({ id }) => id == file)[0];
      })
      .filter(Boolean);
  };

  const getNotAttachedFiles = () => {
    return state.chats.filter(({ id }) => {
      return !state.attached.includes(id);
    });
  };

  const deleteFile = (data: { id: string; parentId: string | null }) => {
    dispatch({
      type: "deleteFile",
      payload: data,
    });
  };

  const editFile = (data: {
    id: string;
    parentId: string | null;
    name: string;
  }) => {
    dispatch({
      type: "editFile",
      payload: data,
    });
  };

  const reorder = (data: Reorder) => {
    dispatch({
      type: "reorder",
      payload: data,
    });
  };

  return {
    chats: state.chats,
    createFolder,
    createText,
    isFolder,
    addFileToFolder,
    changeFolderName,
    deleteFolder,
    attachFile,
    getAttachFiles,
    getNotAttachedFiles,
    deleteFile,
    editFile,
    reorder,
    state,
    getChatList,
  };
};

const createChatFolderBlank = (name: string): ChatFile => {
  return {
    name: name,
    children: [],
    type: "folder",
    id: uuidv4(),
  };
};

const createChatTextBlank = (name: string): ChatFile => {
  return {
    name,
    id: uuidv4(),
    type: "text",
    children: [],
  };
};
