import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../api/auth";

export const singInThunk = createAsyncThunk(
  "auth/singin",
  async (body, { rejectWithValue }) => {
    try {
      const data = await callApi("/api/auth/singin", body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  "auth/singup",
  async (body, { rejectWithValue }) => {
    console.log(body);
    try {
      const data = await callApi("/api/auth/singup", body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
