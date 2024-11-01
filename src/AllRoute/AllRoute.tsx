import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../components/layouts/MainLayouts";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ProductDetails from "../components/layouts/ProductDetails";
import Cart from "../pages/Cart";
import CheckOutPage from "../pages/CheckOut";
import Aboute from "../components/layouts/Aboute";

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
        path: "/view-details/:id",
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
        path: "/aboute-us",
        element: <Aboute></Aboute>,
      },
    ],
  },
]);

export default router;
