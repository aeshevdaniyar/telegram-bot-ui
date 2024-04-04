import ChatGPTLogo from "@assets/ChatGPTOutlineLogo.svg";
import { HStack } from "@components/atoms/HStack";
import { ShareIcon } from "@components/atoms/Icon";
import { Stack } from "@components/atoms/Stack";
import { Container } from "@components/molecules/container";
import { PageHeader } from "@components/organisms/page-header";
import { PromtSearchPanel } from "@components/organisms/promt-search";
import { ShareChat } from "@components/organisms/share-chat";
import { ChatHeaderContent } from "@components/templates/chat-header-content";
import { useLayout } from "@components/templates/layout";
import { useEffect } from "react";

export const NewChat = () => {
  const { promtInputLayout, defaultLayout } = useLayout();

  useEffect(() => {
    promtInputLayout();

    return () => defaultLayout();
  }, [defaultLayout, promtInputLayout]);

  return (
    <PageHeader
      pageContent={
        <ChatHeaderContent
          aiLogo={ChatGPTLogo}
          aiName="ChatGPT 4"
          rightElement={
            <ShareChat shareContent={<></>}>
              <ShareIcon />
            </ShareChat>
          }
        />
      }
    >
      <Container>
        <Stack className="gap-20"></Stack>
      </Container>
      <HStack className="fixed justify-center promt-position-bottom left-0 right-0 z-20">
        <Container className="w-full">
          <PromtSearchPanel />
        </Container>
      </HStack>
    </PageHeader>
  );
};
