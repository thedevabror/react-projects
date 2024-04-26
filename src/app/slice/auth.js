import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  createUserStart: false,
  createUserSucces: false,
  createUserFailur: false,
  loginUserStart: false,
  loginUserSucces: false,
  loginUserFailur: false,
  userData: {},
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
      state.createUserStart = false;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.createUserSucces = true;
      state.createUserFailur = false;
      state.userData = action.payload;
      localStorage.setItem("user", action.payload);
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.createUserFailur = true;
      state.error = action.payload;
    },
    logInUserStart: (state) => {
      state.isLoading = true;
      state.loginUserStart = false;
    },
    logInUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loginUserSucces = true;
      state.loginUserFailur = false;
      state.userData = action.payload;
      localStorage.setItem("user", action.payload.token);
    },
    logInUserFailure: (state, action) => {
      state.isLoading = false;
      state.loginUserFailur = true;
      state.error = action.payload;
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
} = authSlice.actions;
export default authSlice.reducer;
