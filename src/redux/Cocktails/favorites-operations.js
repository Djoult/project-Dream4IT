import { createAsyncThunk } from '@reduxjs/toolkit';
import { callGetApi, callApi } from '../../api/auth';

export const fetchFavorites = createAsyncThunk(
    "favorite/fetch", 
    async (_, thunkAPI) => {
        try  {            
            const data = await callGetApi('/api/recipes/favorite');    
            return data.hits;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
    
);

export const deleteFavorite = createAsyncThunk(
    "favorite/delete", 
    async ( id, thunkAPI) => {
      try {
        await callApi(`/api/recipes/favorite/${id}`, id, 'patch'); 
        return id;
      }
      catch(error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )

