import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from "./api/cocktails";
import * as actions from "./cocktails-actions";

// export const fetchMyCocktails = () => {
//   const func = async (dispatch) => {
//     try {
//       dispatch(actions.fetchMyCocktailsPending());
//       const {data} = await api.getMyCocktails();
//       console.log(data);
//       dispatch(actions.fetchMyCocktailsFulfilled(data));
//     }
//     catch ({response}) {
//       dispatch(actions.fetchMyCocktailsRejected(response))
//     }
//   }
//   return func
// };


export const fetchMyCocktails = createAsyncThunk(
  "myCocktails/fetch",
  async (_, thunkAPI) => {
    try {
    const{data} = await api.getMyCocktails();
    return data;
    }
    catch ({response}) {
      return thunkAPI.rejectWithValue(response);
    }
  }
)




