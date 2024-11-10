import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../components/layouts/MainLayouts";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ProductDetails from "../components/layouts/ProductDetails";
import Cart from "../pages/Cart";
import CheckOutPage from "../pages/CheckOut";
import Aboute from "../components/layouts/Aboute";
import AllProduct from "../components/layouts/AllProduct";
import ManageProduct from "../components/layouts/ManageProduct";
import UpdatedData from "../components/layouts/UpdatedData";

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
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/check-out",
        element: <CheckOutPage></CheckOutPage>,
      },
      {
        path: "/all-product",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/aboute-us",
        element: <Aboute></Aboute>,
      },
      {
        path: "/manage-product",
        element: <ManageProduct></ManageProduct>,
      },
      {
        path: "/updated/single_product/:id",
        element: <UpdatedData></UpdatedData>,
      },
    ],
  },
]);

export default router;
