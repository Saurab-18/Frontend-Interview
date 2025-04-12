import React from "react";
import { addToCart, removeFromCart } from "../../store/slice/CartSlice";
import { useDispatch } from "react-redux";
export const CartCard = ({ cartItem }) => {
  const dispatch = useDispatch();

  const decreaseQuantity = (cartItem) => {
    dispatch(removeFromCart(cartItem?.id));
  };

  const increaseQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-xl">
      {/* Product Image */}
      <img
        src={cartItem.images?.[0]}
        alt={cartItem.title}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{cartItem.title}</h2>
        <p className="text-sm text-gray-600">${cartItem.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(cartItem)}
          className="bg-gray-200 px-3 py-1 rounded text-xl hover:bg-gray-300"
        >
          −
        </button>
        <span className="min-w-[32px] text-center">1</span>
        <button
          onClick={() => increaseQuantity(cartItem)}
          className="bg-gray-200 px-3 py-1 rounded text-xl hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="w-24 text-right font-bold text-blue-600">
        ${cartItem.price}
      </div>
    </div>
  );
};
