import React from "react";
import { useNavigate } from "react-router-dom";
// import ProductCard from "./ProductCard";

export const Home = () => {
  const navigateTo = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to ShopMate
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover amazing products at unbeatable prices.
        </p>
        <button
          onClick={() => navigateTo("/productList")}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Shop Now
        </button>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"></div>
      </section>
    </div>
  );
};
