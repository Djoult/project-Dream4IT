import {createSlice} from "@reduxjs/toolkit";
import { fetchMyCocktails } from "./myCocktails-operations";

const initialState = {
    items: [
        {   _id: 14523466,
        drink: "Quentin",        
        instructions: "In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
        drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg",
        },
    { _id: 257456688,
        drink: "Irish Coffee",
        instructions: "Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.",
        drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167155/cocktails-v1/drinks/Irish_Coffee.jpg",
    }
],
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
        }
});




// export const {add, delete} = myCocktailsSlice.actions;
export default myCocktailsSlice.reducer;

