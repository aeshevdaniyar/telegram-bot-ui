import { cn } from "@/lib/cn";
import { HStack } from "@components/atoms/HStack";
import { EditIcon, MessageIcon, Trash } from "@components/atoms/Icon";
import { FC, MutableRefObject, useRef, useState } from "react";
import { ChatType } from "./types";

export interface ChatListItemProps {
  name: string;
  type: ChatType;

  inFolder?: boolean;
  isLast?: boolean;

  onDeleteFile: (data: { id: string; parentId: null | string }) => void;
  onEditFile: (data: {
    id: string;
    name: string;
    parentId: null | string;
  }) => void;
  id: string;
  parentId: null | string;
}

export const ChatListItem: FC<ChatListItemProps> = ({
  name,
  type,
  isLast = false,
  inFolder = false,
  onDeleteFile,
  id,
  onEditFile,
  parentId,
}) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(name);
  const onSubmit = () => {
    onEditFile({
      name: value || "",
      id,
      parentId,
    });
    inputRef.current.blur();
    setFocused(false);
  };
  const onEdit = () => {
    setFocused(true);
    inputRef.current.focus();
  };

  const onDelete = () => {
    onDeleteFile({
      id,
      parentId,
    });
  };
  return (
    <HStack
      className={cn(
        "gap-2 px-2 py-2 items-center bg-white text-white relative",
        inFolder && "bg-[#E8ECEF]",
        isLast && "rounded-b-lg"
      )}
    >
      {type == "text" && <MessageIcon />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          value={value}
          className={cn(
            "bg-transparent font-sans font-semibold text-base text-[#9CA3AF]",
            !focused && "pointer-events-none"
          )}
          ref={inputRef}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={() => {
            onSubmit();
          }}
        />
      </form>
      <HStack
        className="absolute right-9 bg-none z-50 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Trash onClick={onDelete} className="text-[#9CA3AF]" />
        <EditIcon onClick={onEdit} className="text-[#9CA3AF]" />
      </HStack>
    </HStack>
  );
};
