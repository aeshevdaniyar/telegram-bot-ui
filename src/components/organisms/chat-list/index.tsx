import { Stack } from "@components/atoms/Stack";
import { FC } from "react";
import "react-nestable/dist/styles/index.css";
import { ChatFolder } from "./chat-folder";
import { ChatListItem } from "./chat-list-item";
import { ChatFile } from "./types";
interface ChatListProps {
  chats: ChatFile[];
  onNewChat: (id: string) => void;
  onEditFolder: (data: { id: string; name: string }) => void;
  deleteFolder: (id: string) => void;
  attachFile: (id: string) => void;
  onDeleteFile: (data: { id: string; parentId: null | string }) => void;
  onEditFile: (data: {
    id: string;
    name: string;
    parentId: null | string;
  }) => void;
}
export const ChatList: FC<ChatListProps> = (props) => {
  const {
    chats,
    onNewChat,
    onEditFolder,
    attachFile,
    deleteFolder,
    onDeleteFile,
    onEditFile,
  } = props;

  return (
    <Stack>
      {chats.map(({ type, name, id: parentId, children }) => {
        if (type == "folder") {
          return (
            <ChatFolder
              key={parentId}
              name={name}
              id={parentId}
              onNewChat={onNewChat}
              onEditFolder={onEditFolder}
              attachFile={attachFile}
              deleteFolder={deleteFolder}
            >
              {children.map(({ name, id, type }, index, arr) => {
                return (
                  <ChatListItem
                    isLast={index == arr.length - 1}
                    key={id}
                    inFolder
                    name={name}
                    type={type}
                    id={id}
                    onDeleteFile={onDeleteFile}
                    onEditFile={onEditFile}
                    parentId={parentId}
                  />
                );
              })}
            </ChatFolder>
          );
        }

        return (
          <ChatListItem
            key={parentId}
            id={parentId}
            onDeleteFile={onDeleteFile}
            onEditFile={onEditFile}
            parentId={null}
            name={name}
            type={type}
          />
        );
      })}
    </Stack>
  );
};
