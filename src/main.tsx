import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import store from "./redux/fetaure/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./AllRoute/AllRoute";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
