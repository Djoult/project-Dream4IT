import { createSlice } from "@reduxjs/toolkit";
import { singInThunk, signUpThunk } from "./thunks";

const initialState = {
  token: "",
  isLoading: false,
  userNeedVerification: false,
  error: "",
  currentUser: null,
};
const handleSignInFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
};

const handleSignUpFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.userNeedVerification = payload.needVerification;
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, action) => {
  const { payload } = action;

  console.log(action);
  state.isLoading = false;
  state.error = payload;
  state.token = "";
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(singInThunk.fulfilled, handleSignInFulfilled)
      .addCase(signUpThunk.fulfilled, handleSignUpFulfilled)
      .addMatcher((action) => {
        return action.type.endsWith("/pending-auth");
      }, handlePending)
      .addMatcher((action) => {
        return action.type.endsWith("/rejected-auth");
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
