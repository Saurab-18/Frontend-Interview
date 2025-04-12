import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        {/* Brand / Logo */}
        <div className="mb-4 md:mb-0 font-semibold text-gray-700">
          © 2025 ShopMate. All rights reserved.
        </div>

        {/* Footer Links */}
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
