import { PageInner } from "@components/organisms/page-inner";
import { Layout } from "@components/templates/layout";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NewChat } from "../NewChatPage";

const ProfilePage = lazy(() => import("../ProfilePage"));
const NaturalNetworksPage = lazy(() => import("../NaturalNetworksPage"));
const AllAIPage = lazy(() => import("../AllAiPage"));
const TokensPage = lazy(() => import("../TokensPage"));
const RefsPage = lazy(() => import("../RefsPage"));
const PlansPage = lazy(() => import("../PlansPage"));
const ChatsPage = lazy(() => import("../ChatsPage"));
const ChatPage = lazy(() => import("../ChatPage"));

const IndexPage = () => {
  // const { onOpen } = useAdModal({
  //   amount: 100,
  //   days: 3,
  //   name: "Безлимит ChatGPT 3.5 Tubo",
  //   tokens: 50,
  // });
  // const { onOpen: onOpenNotEnoughTokenModal } = useNotEnoughTokenModal({
  //   price: 100,
  // });

  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to={"/natural-networks"} />} />
        <Route
          path="profile/*"
          element={
            <PageInner>
              <ProfilePage />
            </PageInner>
          }
        />
        <Route
          path="natural-networks/*"
          element={
            <PageInner>
              <NaturalNetworksPage />
            </PageInner>
          }
        />
        <Route
          path="new-chat/*"
          element={
            <PageInner>
              <NewChat />
            </PageInner>
          }
        />
        <Route
          path="chats"
          element={
            <PageInner>
              <ChatsPage />
            </PageInner>
          }
        />
        <Route
          path="chats/:id"
          element={
            <PageInner>
              <ChatPage />
            </PageInner>
          }
        />
        <Route
          path="plans/*"
          element={
            <PageInner>
              <PlansPage />
            </PageInner>
          }
        />
        <Route
          path="all-ai/*"
          element={
            <PageInner>
              <AllAIPage />
            </PageInner>
          }
        />
        <Route
          path="refs/*"
          element={
            <PageInner>
              <RefsPage />
            </PageInner>
          }
        />
        <Route
          path="tokens/*"
          element={
            <PageInner>
              <TokensPage />
            </PageInner>
          }
        />
      </Routes>
    </Layout>
  );
};

export default IndexPage;
