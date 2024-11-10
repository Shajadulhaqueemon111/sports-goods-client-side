/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "./productCard";

import { useGetProductsQuery } from "../../redux/api/api";

const Products = () => {
  const { data } = useGetProductsQuery({});
  console.log(data);
  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center  mx-auto gap-10">
        {data?.data.map((product: any) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
