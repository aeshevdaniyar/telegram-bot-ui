import { DialogClose } from "@components/atoms/Dialog";
import { HStack } from "@components/atoms/HStack";
import { Text } from "@components/atoms/Text";
import { X } from "lucide-react";
import { FC, ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./share-chat-modal";
import { Box } from "@components/atoms/Box";
import { ChatBubble } from "@components/molecules/chat-bubble";
import ChatGPTLogo from "@assets/ChatGPTOutlineLogo.svg";
import { Stack } from "@components/atoms/Stack";
import { AudioFile } from "../audio-file";
import { ImageFile } from "../image-file";
import { TxtFile } from "../txt-file";
import { VideoFile } from "../video-file";
import { WordFile } from "../word-file";
import { Button } from "@components/atoms/Button";
export interface ShareChatProps {
  children: ReactNode;
  shareContent: ReactNode;
}
export const ShareChat: FC<ShareChatProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="rounded-xl overflow-y-auto h-full flex flex-col">
        <HStack className="bg-white items-center justify-between p-5 rounded-xl">
          <Text className="font-sans" size={"lg"}>
            Поделитесь ссылкой на чат
          </Text>
          <DialogClose>
            <X />
          </DialogClose>
        </HStack>
        <div className="px-5 ">
          <Text className="font-normal text-[13px]">
            Сообщения, которые вы отправляете после создания ссылки, не будут
            опубликованы. Любой, у кого есть URL-адрес, сможет просматривать
            общий чат.
          </Text>

          <Box className="bg-white rounded-[17px] relative mt-6">
            <Stack className="gap-20 h-[500px] overflow-y-auto pt-4.5 pb-10 px-3 ">
              <ChatBubble
                date={new Date()}
                text="Просмотрите этот тест и дайте отзыв о том, как его можно улучшить или скорректировать, чтобы лучше оценить знания и понимание учащимся тестируемого предмета."
                avatarImg="https://github.com/shadcn.png"
                type="request"
              />

              <ChatBubble
                avatarImg={ChatGPTLogo}
                date={new Date()}
                text="Ваше аудио было успешно создано. Вы можете дополнительно настроить его или просто загрузить для использования."
                type="response"
                attachContent={
                  <Stack>
                    <AudioFile fileName="Медуза Matrang" type="response" />
                    <VideoFile type="response" />
                    <WordFile type="response" />
                    <TxtFile type="response" />
                    <ImageFile type="response" />
                  </Stack>
                }
              />
            </Stack>
            <Box className="bg-[#747A7D] h-[74px] rounded-b-xl">
              <Stack className="h-full w-full justify-between p-4.5">
                <Text className="font-sans font-medium text-white">
                  Посевгазона: руководство.
                </Text>
                <Text className="font-sans font-normal text-white" size={"xs"}>
                  15 августа 2023 г.
                </Text>
              </Stack>
            </Box>
          </Box>
          <Button className="w-full mt-6">Скопировать ссылку</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
