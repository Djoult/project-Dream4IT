import { createSlice } from "@reduxjs/toolkit";
import { fetchFavorites, deleteFavorite } from "./favorites-operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchFavorites.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFavorites.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.items = payload;
        })
        .addCase(fetchFavorites.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(deleteFavorite.pending, state => {
          state.loading = true;
          state.error = null;
      })
      .addCase(deleteFavorite.fulfilled, (state, {payload}) => {
          state.loading = false;
          const index = state.items.findIndex(item => item.id === payload);
          state.items.splice(index, 1);
      })
      .addCase(deleteFavorite.rejected, (state, {payload}) => {
          state.loading = false;
          state.error = payload;
      })
    }
});

export default favoritesSlice.reducer;