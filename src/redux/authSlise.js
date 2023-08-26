import { createSlice } from '@reduxjs/toolkit';
import { singInThunk, signUpThunk } from './thunks';

const initialState = {
  user: {},
  token: '',
  isLoading: false,
  userNeedVerification: false,
  error: '',
};
const handleSignInFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.user = payload.user;
};

const handleSignUpFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.userNeedVerification = payload.needVerification;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
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
      .addMatcher(action => {
        return action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        console.log(action);
        return action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
