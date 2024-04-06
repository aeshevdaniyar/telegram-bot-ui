import { cn } from "@/lib/cn";
import { Box } from "@components/atoms/Box";
import { Button } from "@components/atoms/Button";
import { HStack } from "@components/atoms/HStack";
import { FolderAddIcon, PlusIcon } from "@components/atoms/Icon";
import { Input } from "@components/atoms/Input";
import { LinkHref } from "@components/atoms/Link";
import { Stack } from "@components/atoms/Stack";
import { Text } from "@components/atoms/Text";
import { Container } from "@components/molecules/container";

import { ChatList } from "@components/organisms/chat-list";
import { useChatList } from "@components/organisms/chat-list/use-chat-list";
import { PageHeader } from "@components/organisms/page-header";
import { BaseHeaderContent } from "@components/templates/base-header-content";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
const ChatsPage = () => {
  const navigate = useNavigate();
  const {
    createFolder,
    addFileToFolder,
    changeFolderName,
    deleteFolder,
    attachFile,
    getAttachFiles,
    deleteFile,
    editFile,
    reorder,
    getChatList,
  } = useChatList();

  const onCreateFolder = () => {
    return createFolder("Новая папка");
  };

  const onCreateFile = () => {
    navigate("/natural-networks");
  };

  const onDragEnd = (result: DropResult) => {
    if (result.destination?.droppableId && result.source.droppableId) {
      reorder({
        destination: result.destination,
        draggableId: result.draggableId,
        source: result.source,
      });
    }
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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="attached">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cn(
                    "transition-all duration-100 rounded-lg",
                    snapshot.isDraggingOver &&
                      "py-2 px-1   border-2 border-secondary bg-secondary-foreground "
                  )}
                >
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
                    onDeleteFile={deleteFile}
                    onEditFile={editFile}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="chats">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cn(
                    "transition-all duration-100 rounded-lg",
                    snapshot.isDraggingOver &&
                      "py-2 px-1   border-2 border-secondary bg-secondary-foreground "
                  )}
                >
                  <Box className="px-3.5 ">
                    <Text className="text-secondary/75 font-sans text-md font-medium">
                      Список чатов
                    </Text>
                  </Box>
                  <ChatList
                    onNewChat={addFileToFolder}
                    chats={getChatList()}
                    onEditFolder={changeFolderName}
                    deleteFolder={deleteFolder}
                    attachFile={attachFile}
                    onDeleteFile={deleteFile}
                    onEditFile={editFile}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Stack>
        <LinkHref to={"test"}>временная сслыка</LinkHref>
      </Container>
    </PageHeader>
  );
};

export default ChatsPage;
