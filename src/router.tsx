import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home"));
const OtherPage = lazy(() => import("./OtherPage"));
const Loading = () => {
  return (
    <>
      <span>Loading buon cuoi vl</span>
    </>
  );
};

const SuspenseFactory = () => (
  <Suspense fallback={<Loading />}>
    <Outlet></Outlet>
  </Suspense>
);
export default createBrowserRouter([
  {
    element: <SuspenseFactory></SuspenseFactory>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/page",
        element: <OtherPage />,
      },
    ],
  },
]);
