import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/slice/UserSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authenticateUser = useSelector((store) => store.user);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleOnClick = () => {
    dispatch(addUser(userDetails));
    if (authenticateUser) {
      navigate("/");
    }
    return;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleOnChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleOnChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleOnClick}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Extra */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?
          <a href="#" className="text-blue-600 hover:underline ml-1">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
