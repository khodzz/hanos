import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
