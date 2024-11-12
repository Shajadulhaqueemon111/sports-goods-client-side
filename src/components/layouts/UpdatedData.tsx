import { useState } from "react";
import { useUpdateProductByIdMutation } from "../../redux/api/api";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

interface Product {
  _id?: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  name: string;
  price: string;
  rating: string;
  stock_quantity: string;
}

const UpdatedData = () => {
  const { _id } = useParams();

  const [productData, setProductData] = useState<Product>({
    _id,
    brand: "",
    category: "",
    description: "",
    image: "",
    name: "",
    price: "",
    rating: "",
    stock_quantity: "",
  });

  const [UpdateProductById, { isLoading, isError }] =
    useUpdateProductByIdMutation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(productData);
    try {
      const response = await UpdateProductById({
        _id: productData._id,
        single_product: productData,
      }).unwrap();

      toast.success("Product Updated successfully!");
      console.log("Product updated successfully:", response);

      setProductData({
        _id,
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
      toast.error("Product Update Failed!");
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24 w-full">
        <h2 className="text-3xl font-bold">Updated Product</h2>

        <form onSubmit={handleToUpdateProduct}>
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
            {isLoading ? "Updating..." : "Update Product"}
          </button>
          {isError && (
            <div className="text-red-500">Error updating product</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdatedData;
