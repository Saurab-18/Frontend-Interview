import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/CartSlice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const productDetails = {
      id: product?.id,
      title: product?.title,
      images: product?.images,
      price: product?.price,
    };

    dispatch(addToCart(productDetails));
  };

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={product?.images?.[0]}
        alt="Product"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{product?.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ${product.price}
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => handleAddToCart(product)}
            className="flex-1 bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
