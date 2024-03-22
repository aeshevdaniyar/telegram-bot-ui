import { PageInner } from "@components/organisms/page-inner";
import { Layout } from "@components/templates/layout";
import { lazy, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const ProfilePage = lazy(() => import("../ProfilePage"));
const NaturalNetworksPage = lazy(() => import("../NaturalNetworksPage"));
const AllAIPage = lazy(() => import("../AllAiPage"));
const TokensPage = lazy(() => import("../TokensPage"));
const RefsPage = lazy(() => import("../RefsPage"));
const PlansPage = lazy(() => import("../PlansPage"));
const ChatsPage = lazy(() => import("../ChatsPage"));
const ChatPage = lazy(() => import("../ChatPage"));

const IndexPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/natural-networks");
  }, []);
  return (
    <Layout>
      <Routes>
        <Route index element={<PageInner>{/* <MainPage /> */}</PageInner>} />
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
