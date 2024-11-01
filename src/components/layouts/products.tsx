/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "./productCard";

import { useGetProductsQuery } from "../../redux/api/api";

const Products = () => {
  const { data } = useGetProductsQuery({});
  console.log(data);
  return (
    <div className="container">
      <h1 className="text-2xl text-center font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data.map((product: any) => {
          const flatProduct = {
            ...product.single_product,
            id: product.id,
            _id: product._id,
          };
          return <ProductCard key={flatProduct.id} product={flatProduct} />;
        })}
      </div>
    </div>
  );
};

export default Products;
