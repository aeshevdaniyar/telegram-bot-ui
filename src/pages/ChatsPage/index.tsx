import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { FolderAddIcon, PlusIcon } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Input } from "@components/atoms/Input";
import { Container } from "@components/molecules/container";
import { Text } from "@components/atoms/Text";
import { Box } from "@components/atoms/Box";
import { ChatList } from "@components/organisms/chat-list";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";

const ChatsPage = () => {
  return (
    <PageHeader pageContent={<BaseHeaderContent title="Диалоги" />}>
      <Container>
        <Stack className="gap-3">
          <HStack className="gap-3 md:gap-6 items-center">
            <Button
              className="w-full rounded-md py-2 md:py-2.5"
              leftIcon={<PlusIcon />}
            >
              Новый чат
            </Button>
            <Button
              className="w-full hidden md:inline-flex rounded-md"
              leftIcon={<FolderAddIcon />}
            >
              Новая группа
            </Button>
            <Button className="md:hidden min-w-11 h-11 p-0 rounded-md">
              <FolderAddIcon />
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
    </PageHeader>
  );
};

export default ChatsPage;
