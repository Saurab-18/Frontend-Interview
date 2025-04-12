import React from "react";
import { useSelector } from "react-redux";
import { CartCard } from "../components/Cart/CartCard";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  console.log(cartItems);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems &&
        cartItems.map((cartItem) => {
          return <CartCard key={cartItem.id} cartItem={cartItem} />;
        })}
    </div>
  );
};
