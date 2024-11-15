import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Map from "../pages/Map/Map"
import Promotions from "../pages/Promotions/Promotions"

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "/map",
        element: <Map/>,
      },
      {
        path: "/promotoins",
        element: <Promotions/>,
      },
    ],
  },
]);

export default router;
