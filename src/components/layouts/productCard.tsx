/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { addToCart } from "../../redux/fetaure/cartSlice";
import { useDeleteProductByIdMutation } from "../../redux/api/api";
import { FaUserEdit } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ product }: { product: any }) => {
  const [deleteProductById] = useDeleteProductByIdMutation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  // Import SweetAlert if not already imported

  const handleDelete = async (_id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProductById(_id).unwrap();
          console.log(`Product with ID ${_id} deleted successfully.`);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Failed to delete the product:", error);

          Swal.fire(
            "Error",
            "Failed to delete the product. Please try again.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="relative">
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
        <img
          src={product?.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-white mb-2">
            {product.name}
          </h3>
          <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>
          <p className="text-lg font-bold text-white mb-4">${product.price}</p>
          <div className="flex justify-evenly">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(product._id);
              }}
              className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 shadow-md hover:shadow-lg"
            >
              <MdOutlineDeleteForever className="text-2xl font-bold text-center" />
            </button>

            <Link to={`/view-details/${product._id}`}>
              <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 shadow-md hover:shadow-lg">
                View-Details
              </button>
            </Link>
            <Link to={`/updated/single_product/${product._id}`}>
              <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 shadow-md hover:shadow-lg">
                <FaUserEdit className="text-xl font-bold" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
