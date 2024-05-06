import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Gif from "./pages/Gif";
import Favorite from "./pages/Favorite";

const localRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:slug",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <Gif />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={localRouter} />;
}

export default App;
