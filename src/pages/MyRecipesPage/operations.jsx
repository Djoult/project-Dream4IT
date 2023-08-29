import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://';

export const getMyCocktails = createAsyncThunk(
  'cocktails/fetchMycocktails',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cocktails');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCocktail = createAsyncThunk(
    'cocktails/deleteCocktail',
    async (cocktailId, thunkAPI) => {
      try {
        const response = await axios.delete(`/cocktail/${cocktailId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );