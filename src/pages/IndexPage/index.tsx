import { Page } from "@components/molecules/page";
import { Layout } from "@components/templates/layout";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "../ChatPage";
import PlansPage from "../PlansPage";
import RefsPage from "../RefsPage";
import SettingPage from "../SettingPage";

const ProfilePage = lazy(() => import("../ProfilePage"));
const NaturalNetworksPage = lazy(() => import("../NaturalNetworksPage"));
const AllAIPage = lazy(() => import("../AllAiPage"));
const IndexPage = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Page>{/* <MainPage /> */}</Page>} />
        <Route
          path="profile/*"
          element={
            <Page>
              <ProfilePage />
            </Page>
          }
        />
        <Route
          path="natural-networks/*"
          element={
            <Page>
              <NaturalNetworksPage />
            </Page>
          }
        />
        <Route
          path="chats/*"
          element={
            <Page>
              <ChatPage />
            </Page>
          }
        />
        <Route
          path="plans/*"
          element={
            <Page>
              <PlansPage />
            </Page>
          }
        />
        <Route
          path="all-ai/*"
          element={
            <Page>
              <AllAIPage />
            </Page>
          }
        />
        <Route
          path="refs/*"
          element={
            <Page>
              <RefsPage />
            </Page>
          }
        />
        <Route
          path="setting/*"
          element={
            <Page>
              <SettingPage />
            </Page>
          }
        />
      </Routes>
    </Layout>
  );
};

export default IndexPage;
