import ChatGPTLogo from "@assets/ChatGPTOutlineLogo.svg";
import { CodeBlock } from "@components/atoms/CodeBlock";
import { HStack } from "@components/atoms/HStack";
import { ShareIcon } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { BotLoader } from "@components/molecules/bot-loader";
import { BotProgress } from "@components/molecules/bot-progress";
import { ChatBubble } from "@components/molecules/chat-bubble";
import { Container } from "@components/molecules/container";
import { ImageGallery } from "@components/molecules/image-gallery";
import { Image } from "@components/molecules/image-gallery/image";

import { AudioFile } from "@components/organisms/audio-file";
import { ImageFile } from "@components/organisms/image-file";
import { PageHeader } from "@components/organisms/page-header";
import { PromtSearchPanel } from "@components/organisms/promt-search";
import { TxtFile } from "@components/organisms/txt-file";
import { VideoFile } from "@components/organisms/video-file";
import { WordFile } from "@components/organisms/word-file";
import { ChatHeaderContent } from "@components/templates/chat-header-content";
import { useLayout } from "@components/templates/layout";
import { useEffect } from "react";
const ChatPage = () => {
  const { promtInputLayout, defaultLayout } = useLayout();

  useEffect(() => {
    promtInputLayout();

    return () => defaultLayout();
  }, [defaultLayout, promtInputLayout]);

  const codeBlock = `
  let cancelButton = document.getElementById("cancel-button"); 
  let sendButton = document.getElementById("send-button"); 
  cancelButton.addEventListener("click", function() 
  { console.log("Cancel button clicked"); }); 
  sendButton.addEventListener("click", function() 
  { console.log("Send button clicked"); });
`;

  return (
    <PageHeader
      pageContent={
        <ChatHeaderContent
          aiLogo={ChatGPTLogo}
          aiName="ChatGPT 4"
          rightElement={<ShareIcon />}
        />
      }
    >
      <Container>
        <Stack className="gap-20">
          <ChatBubble
            avatarImg={ChatGPTLogo}
            date={new Date()}
            text=""
            type="response"
            attachContent={
              <ImageGallery>
                <Image>
                  <img
                    className="w-full h-full object-cover"
                    src="https://c4.wallpaperflare.com/wallpaper/824/889/310/apex-legends-wraith-apex-legends-hd-wallpaper-preview.jpg"
                  />
                </Image>
                <Image>
                  <img
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                  />
                </Image>
                <Image>
                  <img
                    className="w-full h-full object-cover"
                    src="https://c4.wallpaperflare.com/wallpaper/210/864/1014/video-game-apex-legends-bloodhound-apex-legends-lifeline-apex-legends-wraith-apex-legends-hd-wallpaper-preview.jpg"
                  />
                </Image>
                <Image>
                  <img
                    className="w-full h-full object-cover"
                    src="https://c4.wallpaperflare.com/wallpaper/322/770/553/video-game-apex-legends-bloodhound-apex-legends-hd-wallpaper-preview.jpg"
                  />
                </Image>
              </ImageGallery>
            }
          />
          <ChatBubble
            avatarImg="https://github.com/shadcn.png"
            date={new Date()}
            text="Создайте говорящего аватара для этого сценария: «Добро пожаловать в наш новый продукт — Talking Avatar Video Creator. С помощью этого мощного инструмента вы можете легко создавать привлекательные видеоролики с участием виртуального представителя, который передает ваше сообщение персонализированным и естественным образом. Продвигая продукт, делясь информацией о своем бизнесе или проводя тренинги, наша технология на базе искусственного интеллекта позволяет легко создавать профессионально выглядящие видеоролики, которые привлекают внимание и приводят к результатам. Попробуйте сегодня и сами увидите разницу!»"
            type="request"
          />
          <ChatBubble
            avatarImg="https://github.com/shadcn.png"
            date={new Date()}
            text="Создайте говорящего аватара для этого сценария: «Добро пожаловать в наш новый продукт — Talking Avatar Video Creator. С помощью этого мощного инструмента вы можете легко создавать привлекательные видеоролики с участием виртуального представителя, который передает ваше сообщение персонализированным и естественным образом. Продвигая продукт, делясь информацией о своем бизнесе или проводя тренинги, наша технология на базе искусственного интеллекта позволяет легко создавать профессионально выглядящие видеоролики, которые привлекают внимание и приводят к результатам. Попробуйте сегодня и сами увидите разницу!»"
            type="request"
          />
          <ChatBubble
            avatarImg="https://github.com/shadcn.png"
            date={new Date()}
            text="Создайте говорящего аватара для этого сценария: «Добро пожаловать в наш новый продукт — Talking Avatar Video Creator. С помощью этого мощного инструмента вы можете легко создавать привлекательные видеоролики с участием виртуального представителя, который передает ваше сообщение персонализированным и естественным образом. Продвигая продукт, делясь информацией о своем бизнесе или проводя тренинги, наша технология на базе искусственного интеллекта позволяет легко создавать профессионально выглядящие видеоролики, которые привлекают внимание и приводят к результатам. Попробуйте сегодня и сами увидите разницу!»"
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
          <ChatBubble
            avatarImg={ChatGPTLogo}
            date={new Date()}
            text="Ваше аудио было успешно создано. Вы можете дополнительно настроить его или просто загрузить для использования."
            type="response"
            attachContent={<CodeBlock code={codeBlock} />}
          />
          <ChatBubble
            avatarImg={ChatGPTLogo}
            date={new Date()}
            text=""
            type="response"
            attachContent={
              <Stack>
                <BotProgress text="Дождитесь окончания генерации" value={33} />
              </Stack>
            }
          />
          <ChatBubble
            avatarImg={ChatGPTLogo}
            date={new Date()}
            text=""
            type="response"
            attachContent={
              <Stack>
                <BotLoader />
              </Stack>
            }
          />

          <ChatBubble
            avatarImg={ChatGPTLogo}
            date={new Date()}
            text="Ваше аудио было успешно создано. Вы можете дополнительно настроить его или просто загрузить для использования."
            type="response"
            attachContent={
              <>
                <AudioFile fileName="Медуза Matrang" type="response" />
                <VideoFile type="response" />
                <WordFile type="response" />
                <TxtFile type="response" />
                <ImageFile type="response" />
              </>
            }
          />
        </Stack>
      </Container>
      <HStack className="fixed justify-center promt-position-bottom left-0 right-0 z-20">
        <Container className="w-full">
          <PromtSearchPanel />
        </Container>
      </HStack>
    </PageHeader>
  );
};

export default ChatPage;
