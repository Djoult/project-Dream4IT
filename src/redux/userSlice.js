import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUserThunk, updateUserThunk } from "./thunks";

const initialState = {
  currentUser: {},
  isLoading: false,
  error: "",
};

const handleGetCurrentUserFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.currentUser = payload;
};

const handleUpdateUserFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.currentUser = payload;
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, action) => {
  const { payload } = action;

  state.isLoading = false;
  state.error = payload;
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserThunk.fulfilled, handleGetCurrentUserFulfilled)
      .addCase(updateUserThunk.fulfilled, handleUpdateUserFulfilled)
      .addMatcher((action) => {
        return action.type.endsWith("/pending-user");
      }, handlePending)
      .addMatcher((action) => {
        return action.type.endsWith("/rejected-user");
      }, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
