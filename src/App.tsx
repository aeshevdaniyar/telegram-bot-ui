import { PageGlobal } from "@components/organisms/page-global";
import { lazy, useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useTelegram } from "./telegram";

const IndexPage = lazy(() => import("./pages/IndexPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/*" element={<IndexPage />} />
    </>
  )
);

function App() {
  const { webApp } = useTelegram();
  useEffect(() => {
    webApp?.expand();
  }, [webApp]);
  return (
    <PageGlobal>
      <RouterProvider router={router} />
    </PageGlobal>
  );
}

export default App;
