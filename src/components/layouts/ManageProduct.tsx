/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useLazyPostProductsQuery } from "../../redux/api/api";
import toast from "react-hot-toast";

interface Product {
  brand: string;
  category: string;
  description: string;
  image: string;
  name: string;
  price: string;
  rating: string;
  stock_quantity: string;
}

const ManageProduct = () => {
  const [productData, setProductData] = useState<Product>({
    brand: "",
    category: "",
    description: "",
    image: "",
    name: "",
    price: "",
    rating: "",
    stock_quantity: "",
  });

  const [postProducts, { isLoading, isError }] = useLazyPostProductsQuery();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = {
        single_product: {
          single_product: {
            ...productData,
          },
        },
      };
      console.log(data);
      // Trigger the mutation with the wrapped product data
      const response = await postProducts(data).unwrap();
      toast.success("Product created successfully !");
      console.log("Product created successfully:", response);
      if (response.single_product) {
        console.log("Product created successfully:");
      } else {
        console.log("Product ID:", response.data._id);
      }

      setProductData({
        brand: "",
        category: "",
        description: "",
        image: "",
        name: "",
        price: "",
        rating: "",
        stock_quantity: "",
      });
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24 w-full">
        <h2 className="text-3xl font-bold">Manage Product</h2>

        <form onSubmit={handleToCreateProduct}>
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category Field */}
          <div className="form-control mb-4 gap-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>

            <select
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              className="select select-bordered w-full"
              required
            >
              <option>Select a category</option>
              <option value="Sports">Sports Equipment</option>
              <option value="Electronics">Footwear</option>
              <option value="Clothing">Rackets</option>
              <option value="Books">Protective Gear</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              name="brand"
              value={productData.brand}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Stock Quantity Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Stock Quantity</span>
            </label>
            <input
              type="text"
              name="stock_quantity"
              value={productData.stock_quantity}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Rating Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              value={productData.rating}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              value={productData.image}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn mt-4 btn-block bg-[#D2B48C]">
            {isLoading ? "Saving..." : "Save Product"}
          </button>
          {isError && (
            <div className="text-red-500">Failed to create product.</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ManageProduct;
