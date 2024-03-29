import { cn } from "@/lib/cn";
import { HStack } from "@components/atoms/HStack";
import { EditIcon, MessageIcon, Trash } from "@components/atoms/Icon";
import { FC, MutableRefObject, useRef, useState } from "react";
import { ChatType } from "./types";
import useImperativeDialog from "@/hooks/use-imperative-dialog";

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
  const dialog = useImperativeDialog();
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

  const onDelete = async () => {
    const shouldDelete = await dialog({
      heading: "Are you absolutely sure?",
      text: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    });
    if (shouldDelete) {
      onDeleteFile({
        id,
        parentId,
      });
    }
  };
  return (
    <HStack
      className={cn(
        "gap-2 px-2 py-2 items-center bg-white text-[#9CA3AF] relative transition-all",
        inFolder && "bg-[#E8ECEF]",
        isLast && "rounded-b-lg",
        focused && "bg-[#777D80] text-white"
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
            !focused && "pointer-events-none",
            focused && " text-white"
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
        <Trash onClick={onDelete} />
        <EditIcon onClick={onEdit} />
      </HStack>
    </HStack>
  );
};
