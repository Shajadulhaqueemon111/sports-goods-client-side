import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../components/layouts/MainLayouts";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ProductDetails from "../components/layouts/productDetails";

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
      {
        path: "/view-details/:_id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default router;
