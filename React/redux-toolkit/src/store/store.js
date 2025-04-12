import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/ProductSlice";
import cartReducer from "./slice/CartSlice";
import userReducer from "./slice/UserSlice";

export const AppStore = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
