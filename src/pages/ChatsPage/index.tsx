import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { FolderAddIcon, PlusIcon } from "@components/atoms/Icon";
import { Input } from "@components/atoms/Input";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { Container } from "@components/molecules/container";

import { ChatList } from "@components/organisms/chat-list";
import { useChatList } from "@components/organisms/chat-list/use-chat-list";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";

const ChatsPage = () => {
  const {
    createText,
    createFolder,
    getNotAttachedFiles,
    addFileToFolder,
    changeFolderName,
    deleteFolder,
    attachFile,
    getAttachFiles,
  } = useChatList();

  const onCreateFolder = () => {
    return createFolder("Новая папка");
  };
  const onCreateFile = () => {
    return createText("Новый файл");
  };

  return (
    <PageHeader pageContent={<BaseHeaderContent title="Диалоги" />}>
      <Container>
        <Stack className="gap-3">
          <HStack className="gap-3 md:gap-6 items-center">
            <Button
              className="w-full rounded-md py-2 md:py-2.5"
              leftIcon={<PlusIcon />}
              onClick={onCreateFile}
            >
              Новый чат
            </Button>
            <Button
              className="w-full hidden md:inline-flex rounded-md"
              onClick={onCreateFolder}
              leftIcon={<FolderAddIcon />}
            >
              Новая группа
            </Button>
            <Button
              onClick={onCreateFolder}
              className="md:hidden min-w-11 h-11 p-0 rounded-md"
            >
              <FolderAddIcon />
            </Button>
          </HStack>
          <Input placeholder="Поиск" />
          <Box className="px-3.5 ">
            <Text className="text-secondary/75 font-sans text-md font-medium">
              Закрепленные чаты
            </Text>
          </Box>
          <ChatList
            onNewChat={addFileToFolder}
            chats={getAttachFiles()}
            onEditFolder={changeFolderName}
            deleteFolder={deleteFolder}
            attachFile={attachFile}
          />
          <Box className="px-3.5 ">
            <Text className="text-secondary/75 font-sans text-md font-medium">
              Список чатов
            </Text>
          </Box>
          <ChatList
            onNewChat={addFileToFolder}
            chats={getNotAttachedFiles()}
            onEditFolder={changeFolderName}
            deleteFolder={deleteFolder}
            attachFile={attachFile}
          />
        </Stack>
      </Container>
    </PageHeader>
  );
};

export default ChatsPage;
