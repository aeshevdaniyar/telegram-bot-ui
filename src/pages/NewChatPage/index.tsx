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
import { useLocation, useNavigate } from "react-router-dom";
import { useNewChat } from "./use-new-chat";

export const NewChat = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { aiinfo } = useNewChat(search);

  const { promtInputLayout, defaultLayout } = useLayout();

  useEffect(() => {
    promtInputLayout();

    return () => defaultLayout();
  }, [defaultLayout, promtInputLayout]);

  useEffect(() => {
    if (!aiinfo) {
      navigate("/natural-networks");
    }
  }, [aiinfo]);

  if (!aiinfo) {
    return <></>;
  }
  return (
    <PageHeader
      pageContent={
        <ChatHeaderContent
          aiLogo={aiinfo.icon}
          aiName={aiinfo.name}
          amount={aiinfo.amount}
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
