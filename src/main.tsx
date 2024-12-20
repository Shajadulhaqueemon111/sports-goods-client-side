import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import store from "./redux/fetaure/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./AllRoute/AllRoute";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </div>
    </Provider>
  </React.StrictMode>
);
