/* eslint-disable @typescript-eslint/no-explicit-any */

import CartDetails from "../components/layouts/CartDetails";
import OrderSummary from "../components/layouts/OurOrderSummer";

import { useAppSelector } from "../redux/fetaure/hooks";

const Cart = () => {
  const products = useAppSelector((store) => store.cart?.products || []);

  console.log(products);
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: any, index: number) => (
              <CartDetails key={`${product.id}-${index}`} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500">No products found</p>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
