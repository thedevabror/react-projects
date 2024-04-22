import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    createUserStart: false,
    createUserSucces: false,
    createUserFailur: false,
    loginUserStart: false,
    loginUserSucces: false,
    loginUserFailur: false,
    userData: {},
    error: null
  }

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reducers: {
        signUserStart: (state) => {
            state.isLoading = true
            state.createUserStart = false
        },
        signUserSuccess: (state, action) => {
            state.isLoading = false
            state.createUserSucces = true
            state.createUserFailur = false
            state.userData = action.payload
            localStorage.setItem('Key', action.payload.key)
            localStorage.setItem('Sign', action.payload.secret)
        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.createUserFailur = true
            state.error = action.payload
        },
        logInUserStart: (state) => {
            state.isLoading = true
            state.loginUserStart = false
        },
        logInUserSuccess: (state, action) => {
            state.isLoading = false
            state.loginUserSucces = true
            state.loginUserFailur = false
            state.userData = action.payload
            localStorage.setItem('Key', action.payload.key)
            localStorage.setItem('Sign', action.payload.secret)
        },
        logInUserFailure: (state, action) => {
            state.isLoading = false
            state.loginUserFailur = true
            state.error = action.payload
        },
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer