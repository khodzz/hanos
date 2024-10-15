import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routing/Routing";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
