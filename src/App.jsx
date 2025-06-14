import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainContainer from "./components/MainContainer";
import { ThreeDot } from "react-loading-indicators";
// import WatchPage from "./components/WatchPage"
import Dummy from "./components/Dummy";

const WatchPage = lazy(() => import("./components/WatchPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: (
          <Suspense
            fallback={
              <div className=" h-screen flex items-center ">
                <ThreeDot color="#88847d" size="large" text="" textColor="" />
              </div>
            }
          >
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/dummy",
        element: <Dummy />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
