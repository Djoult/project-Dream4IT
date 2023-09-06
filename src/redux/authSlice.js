import { createSlice } from '@reduxjs/toolkit';
import { signInThunk, signUpThunk, logOutThunk } from './thunks';

const initialState = {
  token: '',
  isLoading: false,
  userNeedVerification: false,
  error: '',
  currentUser: null,
};
const handleSignInFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
};

const handleSignUpFulfilled = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  state.userNeedVerification = payload.needVerification;
  state.currentUser = { email: payload.email };
};

const handleLogoutFulfilled = state => {
  state.isLoading = false;
  state.token = '';
  state.currentUser = null;
};

const handlePending = state => {
  state.isLoading = true;
  console.log(12345);
  state.error = '';
};

const handleRejected = (state, action) => {
  const { payload } = action;
  state.isLoading = false;
  state.error = payload;
  state.token = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(signInThunk.fulfilled, handleSignInFulfilled)
      .addCase(signUpThunk.fulfilled, handleSignUpFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogoutFulfilled)
      .addMatcher(action => {
        return (
          action.type.endsWith('/signin/pending') ||
          action.type.endsWith('/signup/pending')
        );
      }, handlePending)
      .addMatcher(action => {
        return (
          action.type.endsWith('/signin/rejected') ||
          action.type.endsWith('/signup/rejected')
        );
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
