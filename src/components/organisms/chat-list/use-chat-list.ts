import { useCallback, useEffect, useMemo, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatFile } from "./types";
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
    };

interface ChatState {
  chats: ChatFile[];
  attached: string[];
}
const reducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case "createFolder": {
      return {
        ...state,
        chats: [...state.chats, createChatFolderBlank(action.payload)],
      };
    }
    case "createText": {
      return {
        ...state,
        chats: [...state.chats, createChatTextBlank(action.payload)],
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
    case "attachFile": {
      return {
        ...state,
        attached: [...state.attached, action.payload],
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
    return state.chats.filter(({ id }) => {
      return state.attached.includes(id);
    });
  };

  const getNotAttachedFiles = () => {
    return state.chats.filter(({ id }) => {
      return !state.attached.includes(id);
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
