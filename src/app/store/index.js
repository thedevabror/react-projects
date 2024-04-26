import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/auth";
import ProductAndCategoriSlice from "../slice/products";

export default configureStore({
  reducer: {
    auth: AuthSlice,
    productCategory: ProductAndCategoriSlice,
  },
});
