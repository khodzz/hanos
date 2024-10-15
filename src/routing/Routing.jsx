import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
