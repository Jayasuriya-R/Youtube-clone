import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"
import Dummy from "./components/Dummy"

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      },
      {
        path:"/dummy",
        element:<Dummy/>
      }
    ]
  }
])
function App() {

  return (
    <>
     <Header/>
     <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}

export default App
