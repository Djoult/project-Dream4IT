import {createSlice} from "@reduxjs/toolkit";
import { fetchMyCocktails, 
    deleteCocktail 
} from "./myCocktails-operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const myCocktailsSlice = createSlice({
        name: "myCocktails",
        initialState,
        extraReducers: builder => {
            builder.addCase(fetchMyCocktails.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMyCocktails.fulfilled, (state, {payload}) => {
                state.loading = false;
                state.items = payload;
            })
            .addCase(fetchMyCocktails.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(deleteCocktail.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCocktail.fulfilled, (state, {payload}) => {
                state.loading = false;
                const index = state.items.findIndex(item => item.id === payload);
                state.items.splice(index, 1);
            })
            .addCase(deleteCocktail.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
        }
});

export default myCocktailsSlice.reducer;

