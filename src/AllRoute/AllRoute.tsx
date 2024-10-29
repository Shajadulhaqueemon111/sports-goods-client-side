import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../components/layouts/MainLayouts";
import Error from "../pages/Error";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
