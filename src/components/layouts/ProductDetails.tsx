/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetProductByIdQuery } from "../../redux/api/api";
import Modal from "./Modal";
import { addToCart } from "../../redux/fetaure/cartSlice";
import Rating from "./Rating";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { _id } = useParams<{ _id: string }>();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Fetch product by ID
  const { data, isLoading, error } = useGetProductByIdQuery(_id || "");

  // Access the single_product data within the nested structure
  const product = data?.data;

  useEffect(() => {
    console.log("Fetched product:", product);
  }, [product]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  const handleShowModal = (product?: any) => {
    if (product) {
      setSelectedProduct(product);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = (product: any) => {
    if (parseInt(product.stock_quantity) === 0) {
      toast.error("Product is out of stock!"); // Display the toast error message
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <div className="relative w-4/5 mx-auto">
      {showModal && selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          handleAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}

      <div
        onClick={() => handleShowModal(product)}
        className="border rounded-lg shadow-lg overflow-hidden bg-black transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
      >
        <div className="flex">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-white mb-2">
              <Rating value={Math.round(parseFloat(product.rating))} />
            </h3>
            <h3 className="text-xl font-semibold text-white mb-2">
              {product.name}
            </h3>
            <p className="text-gray-300 mb-4 flex-grow">
              {product.description}
            </p>
            <p className="text-gray-300 mb-4 flex-grow">{product.brand}</p>
            <p className="text-gray-300 mb-4 flex-grow">
              {product.stock_quantity}
            </p>
            <p className="text-lg font-bold text-white mb-4">
              ${product.price}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
            >
              Add-To-cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
