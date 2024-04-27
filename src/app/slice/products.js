import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  isLoading: false,
  productCategories: [],
  productCategoriesFailur: false,
  allProducts: [],
  allProductsFailur: false,
  singleProduct: {},
  singleProductFailur: false
};

export const productAndcategoriSlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {
    getCategoryStart: (state) => {
      state.isLoading = true;
      state.productCategoriesFailur = false;
    },
    getCategorySucces: (state, action) => {
      state.isLoading = false;
      state.productCategories = action.payload;
      state.productCategoriesFailur = false;
    },
    getCategoryFailur: (state) => {
      state.isLoading = false;
      state.productCategoriesFailur = true;
    },
    getProductStart: (state) => {
      state.allProductsFailur = false;
    },
    getProductSucces: (state, action) => {
      state.allProducts = action.payload;
      state.allProductsFailur = false;
    },
    getProductFailur: (state) => {
      state.isLoading = false;
      state.allProductsFailur = true;
    },
    getSingleProductStart: (state) => {
      state.isLoading = true;
    },
    getSingleProductSucces: (state, action) => {
      state.isLoading = false;
      state.singleProduct = action.payload
    },
    getSingleProductSuccesFailur: (state) => {
      state.singleProductFailur = true
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const {
  getCategoryStart,
  getCategorySucces,
  getCategoryFailur,
  getProductStart,
  getProductSucces,
  getProductFailur,
  increment,
  decrement,
  getSingleProductStart,
  getSingleProductSucces,
  getSingleProductSuccesFailur
} = productAndcategoriSlice.actions;

export default productAndcategoriSlice.reducer;
