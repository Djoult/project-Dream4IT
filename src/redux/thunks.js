import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi, callGetApi } from "../api/auth";

export const singInThunk = createAsyncThunk(
  "auth/signin",

  async (body, { rejectWithValue }) => {
    try {
      const data = await callApi("/api/auth/signin", body);

  async (body, { rejectWithValue, dispatch }) => {
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
    try {
      const data = await callApi("/api/auth/signup", body);


      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  "auth/profile",
  async () => {
    try {
      const data = await callGetApi("/api/auth/current");

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "auth/update",
  async ({body, headers}, { rejectWithValue }) => {
    try {
      const data = await callApi("/api/auth/update", body, "PATCH", headers);
 

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
