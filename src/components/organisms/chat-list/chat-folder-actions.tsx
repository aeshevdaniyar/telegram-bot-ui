import { HStack } from "@components/atoms/HStack";
import { EditIcon, PaperClipicon, Trash } from "@components/atoms/Icon";
export interface ChatFolderActionsProps {
  onDelete: () => void;
}
export const ChatFolderActions = () => {
  return (
    <HStack
      className="absolute right-9 bg-none z-50"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Trash />
      <EditIcon />
      <PaperClipicon />
    </HStack>
  );
};
