import { cn } from "@/lib/cn";
import { HStack } from "@components/atoms/HStack";
import { MessageIcon } from "@components/atoms/Icon";
import { Text } from "@components/atoms/Text";
import { FC } from "react";
import { ChatType } from "./types";

export interface ChatListItemProps {
  name: string;
  type: ChatType;

  inFolder?: boolean;
  isLast?: boolean;
}

export const ChatListItem: FC<ChatListItemProps> = ({
  name,
  type,
  isLast = false,
  inFolder = false,
}) => {
  return (
    <HStack
      className={cn(
        "gap-2 px-2 py-2 items-center bg-white text-white",
        inFolder && "bg-[#E8ECEF]",
        isLast && "rounded-b-lg"
      )}
    >
      {type == "text" && <MessageIcon />}
      <Text className={cn("font-sans font-semibold text-[#9CA3AF]")}>
        {name}
      </Text>
    </HStack>
  );
};
