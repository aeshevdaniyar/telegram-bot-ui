import { Page } from "@components/molecules/page";
import { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const IndexPage = lazy(() => import("./pages/IndexPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/*" element={<IndexPage />} />
    </>
  )
);

function App() {
  return (
    <Page>
      <RouterProvider router={router} />
    </Page>
  );
}

export default App;
