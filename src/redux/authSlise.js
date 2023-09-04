import { createSlice } from '@reduxjs/toolkit';
import { singInThunk, signUpThunk, logOutThunk } from './thunks';

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
  state.error = '';
};

const handleRejected = (state, action) => {
  const { payload } = action;

  console.log(action);
  state.isLoading = false;
  state.error = payload;
  state.token = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(singInThunk.fulfilled, handleSignInFulfilled)
      .addCase(signUpThunk.fulfilled, handleSignUpFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogoutFulfilled)
      .addMatcher(action => {
        return action.type.endsWith('/pending-auth');
      }, handlePending)
      .addMatcher(action => {
        return action.type.endsWith('/rejected-auth');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
