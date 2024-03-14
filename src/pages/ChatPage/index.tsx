import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { FolderAddIcon, PlusIcon } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Input } from "@components/atoms/Input";
import { Container } from "@components/molecules/container";
import { Text } from "@components/atoms/Text";
import { Box } from "@components/atoms/Box";
import { ChatList } from "@components/organisms/chat-list";

const ChatPage = () => {
  return (
    <Container>
      <Stack className="gap-3">
        <HStack className="gap-6">
          <Button className="w-full" leftIcon={<PlusIcon />}>
            Новый чат
          </Button>
          <Button className="w-full" leftIcon={<FolderAddIcon />}>
            Новая группа
          </Button>
        </HStack>
        <Input placeholder="Поиск" />
        <Box className="px-3.5 ">
          <Text className="text-secondary/75 font-sans text-md font-medium">
            Список чатов
          </Text>
        </Box>
        <ChatList />
      </Stack>
    </Container>
  );
};

export default ChatPage;
