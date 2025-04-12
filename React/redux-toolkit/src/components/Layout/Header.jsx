import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo or Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopMate
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="/productList" className="hover:text-blue-600">
            Products
          </Link>
          <Link to="/cart" className="hover:text-blue-600">
            Cart
          </Link>
        </nav>

        {/* Login Button */}
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </div>
    </header>
  );
};
