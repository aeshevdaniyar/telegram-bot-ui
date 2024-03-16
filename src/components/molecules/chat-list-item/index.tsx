import { cn } from "@/lib/cn";
import { HStack } from "@components/atoms/HStack";
import { FolderIcon } from "@components/atoms/Icon";
import { Text } from "@components/atoms/Text";
import { FC } from "react";
export interface ChatListItemProps {
  type?: "odd" | "even" | "default";
  isLast?: boolean;
}
export const ChatListItem: FC<ChatListItemProps> = (props) => {
  const { type = "default", isLast = false } = props;
  return (
    <HStack
      className={cn(
        "gap-2 px-2 py-2 items-center",
        type == "odd" && "bg-[#E8ECEF] text-white",
        type == "even" && "bg-[#777D80]",
        isLast && "rounded-b-lg"
      )}
    >
      <FolderIcon
        className={cn(
          type == "odd" && "text-[#9CA3AF]",
          type == "even" && "text-white"
        )}
      />
      <Text
        className={cn(
          "font-sans font-semibold ",
          type == "odd" && "text-[#9CA3AF]",
          type == "even" && "text-white"
        )}
      >
        Тут какой-то текст
      </Text>
    </HStack>
  );
};
