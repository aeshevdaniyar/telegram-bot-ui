import { cn } from "@/lib/cn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/atoms/Accordion";
import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import {
  EditIcon,
  FolderIcon,
  PaperClipicon,
  PlusIcon,
  Trash,
} from "@components/atoms/Icon";
import { FC, MutableRefObject, ReactNode, useRef, useState } from "react";
import { ChatFolder as ChatFolderType } from "./types";
import useImperativeDialog from "@/hooks/use-imperative-dialog";
export interface ChatFolderProps extends Omit<ChatFolderType, "files"> {
  children: ReactNode;
  onNewChat: (id: string) => void;
  onEditFolder: (data: { id: string; name: string }) => void;
  deleteFolder: (id: string) => void;
  attachFile: (id: string) => void;
}
export const ChatFolder: FC<ChatFolderProps> = (props) => {
  const {
    id,
    name,
    children,
    onNewChat,
    onEditFolder,
    attachFile,
    deleteFolder,
  } = props;
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(name);
  const dialog = useImperativeDialog();
  const [accardion, setAccardion] = useState<string[]>([]);
  const onEdit = () => {
    setFocused(true);
    inputRef.current.focus();
  };
  const onSubmit = () => {
    onEditFolder({
      name: value,
      id,
    });
    inputRef.current.blur();
    setFocused(false);
  };

  const onDelete = async () => {
    const shouldDelete = await dialog({
      heading: "Are you absolutely sure?",
      text: "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    });
    if (shouldDelete) {
      deleteFolder(id);
    }
  };

  const onAttachFile = () => {
    attachFile(id);
  };

  return (
    <Accordion
      type="multiple"
      className="w-full"
      onValueChange={setAccardion}
      value={accardion}
    >
      <AccordionItem value={id} className="">
        <AccordionTrigger
          className={cn(
            accardion.includes(id) && "bg-[#777D80] text-white",
            !accardion.includes(id) && " text-[#9CA3AF]",
            focused && "bg-[#777D80] text-white !delay-0 duration-75"
          )}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <input
              value={value}
              className={cn(
                "bg-transparent ",
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

          <Box className="absolute left-2 bg-none">
            <FolderIcon />
          </Box>

          <HStack
            className="absolute right-9 bg-none z-50"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Trash onClick={onDelete} />
            <EditIcon onClick={onEdit} />
            <PaperClipicon onClick={onAttachFile} />
          </HStack>
        </AccordionTrigger>
        <AccordionContent>
          {children}
          <Button
            className="text-sm"
            leftIcon={<PlusIcon />}
            variant={"ghost"}
            onClick={() => {
              onNewChat(id);
            }}
          >
            Новый чат
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
