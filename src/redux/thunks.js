import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi, getCurrent, setToken } from "../api/auth";

export const singInThunk = createAsyncThunk(
  "auth/singin",
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await callApi("/api/auth/singin", body);

      await dispatch(getCurrentThunk())

      return data;

    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  "auth/singup",
  async (body, { rejectWithValue, dispatch }) => {
    console.log(body);
    try {
      const data = await callApi("/api/auth/singup", body);

      await dispatch(getCurrentThunk())

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getCurrentThunk = createAsyncThunk(
  "auth/profile",
  async () => {
    try {
      const data = await getCurrent("/api/auth/current");

      return data;
    }
    catch (error) {
      console.log(error.message)
    }
  }
);
