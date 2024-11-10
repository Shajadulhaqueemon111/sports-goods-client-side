/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../../redux/api/api";
import ProductCard from "./productCard";

const AllProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useGetProductsByCategoryQuery(category);

  // Handle loading state
  if (isLoading) return <p>Loading...</p>;

  const products = data?.data || [];

  const filteredProducts = products.filter(
    (product: { category: string | null; name: string }) =>
      product.category === category &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-10">
        All Products in {category}
      </h1>

      {/* Search Bar */}
      <div className="mb-5 text-center">
        <input
          type="text"
          placeholder="Search products by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item: any) => (
            <ProductCard key={item._id} product={item} />
          ))
        ) : (
          <p>No products found for this category or search query.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
