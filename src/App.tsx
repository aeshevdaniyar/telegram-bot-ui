import { PageGlobal } from "@components/organisms/page-global";
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
    <PageGlobal>
      <RouterProvider router={router} />
    </PageGlobal>
  );
}

export default App;
