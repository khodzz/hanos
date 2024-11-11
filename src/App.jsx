import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routing/Routing";
import "./styles/App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./Store/reducers/products/products";

function App() {

  const dispach = useDispatch()

  const {data, status, error, fillter} = useSelector(s => s.products)

  useEffect(()=>{
    dispach(getProducts())
  },[])


  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
