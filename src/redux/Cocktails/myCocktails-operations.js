import { createAsyncThunk } from '@reduxjs/toolkit';
import { callGetApi, callApi } from '../../api/auth';

export const fetchMyCocktails = createAsyncThunk(
  "myCocktails/fetch",
  async (_, thunkAPI) => {
    try {
      const data = await callGetApi('/api/recipes/own');    
      return data.hits;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCocktail = createAsyncThunk(
  "myCocktails/delete", 
  async ( id, thunkAPI) => {
    try {
      await callApi(`/api/recipes/own/${id}`, id, 'delete'); 
      return id;
    }
    catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)



