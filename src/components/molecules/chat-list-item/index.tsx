import { HStack } from "@components/atoms/HStack";
import { FolderIcon } from "@components/atoms/Icon";
import { Text } from "@components/atoms/Text";

export const ChatListItem = () => {
  return (
    <HStack className="gap-4.5 px-3.5 py-2 items-center">
      <FolderIcon />
      <Text className="font-sans font-semibold text-muted-foreground">
        Тут какой-то текст
      </Text>
    </HStack>
  );
};
