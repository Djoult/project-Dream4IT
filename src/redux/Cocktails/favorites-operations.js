import * as api from "./api/cocktails";
import * as actions from "./cocktails-actions";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk(
    "favorite/fetch", 
    async (_, thunkAPI) => {
        try  {
            const {data} = await api.getFavorites();
            return data;
        }
        catch ({response}) {
            return thunkAPI.rejectWithValue(response)
        }
    }
    
)

// export const fetchFavorites = () => {
//     const func = async (dispatch) => {
//         try {
//         dispatch(actions.fetchFavoritesPending());
//         const {data} = await api.getFavorites();
//         console.log(data);
//         dispatch(actions.fetchFavoritesFulfilled(data))
//         }
//         catch ({response})  { 
//             dispatch(actions.fetchFavoritesRejected(response))
//         }        
//     }
//     return func
// }

