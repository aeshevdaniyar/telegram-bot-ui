import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { FolderAddIcon, PlusIcon } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Input } from "@components/atoms/Input";
import { Container } from "@components/molecules/container";

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
      </Stack>
    </Container>
  );
};

export default ChatPage;
