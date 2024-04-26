import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  isLoading: false,
  productCategories: [],
  productCategoriesFailur: false,
  allProducts: [],
  allProductsFailur: false,
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
    // getProductStart: (state) => {
    //   state.isLoading = true;
    //   state.allProductsFailur = false;
    // },
    getProductSucces: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
      state.allProductsFailur = false;
    },
    getProductFailur: (state) => {
      state.isLoading = false;
      state.allProductsFailur = true;
    },
    increment: (state) => {
      state.count += 1;
    },
    incrementInp: (state, action) => {
      state.count = action.payload;
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
  // getProductStart,
  getProductSucces,
  getProductFailur,
  increment,
  decrement,
  incrementInp,
} = productAndcategoriSlice.actions;

export default productAndcategoriSlice.reducer;
