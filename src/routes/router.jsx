import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Destination from "../pages/Destination";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/home",
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <p>Loading</p>
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
