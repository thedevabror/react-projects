import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  logined: false,
  createUserStart: false,
  createUserSucces: false,
  createUserFailur: false,
  loginUserStart: false,
  loginUserSucces: false,
  loginUserFailur: false,
  userData: {},
  userCart: {},
  userCartError: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
      state.logined = false;
      state.createUserStart = false;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.createUserSucces = true;
      state.createUserFailur = false;
      state.userData = action.payload;
      state.logined = true;
      localStorage.setItem("token", action.payload);
      localStorage.setItem("logined", state.logined);
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.logined = false;
      state.createUserFailur = true;
      state.error = action.payload;
    },
    logInUserStart: (state) => {
      state.isLoading = true;
      state.logined = false;
      state.loginUserStart = false;
    },
    logInUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loginUserSucces = true;
      state.loginUserFailur = false;
      state.userData = action.payload;
      state.logined = true;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("logined", state.logined);
    },
    logInUserFailure: (state, action) => {
      state.isLoading = false;
      state.logined = false;
      state.loginUserFailur = true;
      state.error = action.payload;
    },
    addCartStart: (state) => {
      state.isLoading = true;
    },
    addCartSuccess: (state, action) => {
      state.isLoading = false;
      state.userCart = action.payload;
    },
    addCartFailur: (state) => {
      state.isLoading = false;
      state.userCartError = true;
    },
  },
});

export const {
  signUserStart,
  signUserSuccess,
  signUserFailure,
  logInUserStart,
  logInUserSuccess,
  logInUserFailure,
  addCartStart,
  addCartSuccess,
  addCartFailur
} = authSlice.actions;
export default authSlice.reducer;
