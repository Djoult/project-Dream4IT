import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../api/auth";

export const singInThunk = createAsyncThunk(
  "auth/signin",
  async (body, { rejectWithValue }) => {
    try {
      const data = await callApi("/api/auth/signin", body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  "auth/signup",
  async (body, { rejectWithValue }) => {
    console.log(body);
    try {
      const data = await callApi("/api/auth/signup", body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
