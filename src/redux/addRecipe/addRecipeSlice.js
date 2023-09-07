import { createSlice } from '@reduxjs/toolkit';
import * as thunk from './addRecipeThunks';

//
// fullfilled handlers
//

export const fetchIngredientsFullfilled = (state, { payload: ingredients }) => {
  state.ingredients = ingredients;
};
export const fetchCategoryFullfilled = (state, { payload: category }) => {
  state.category = category;
};
export const fetchGlassFullfilled = (state, { payload: glass }) => {
  state.glass = glass;
};
export const fetchPopularFullfilled = (state, { payload: popular }) => {
  state.popular = popular;
};
export const fetchRandomFullfilled = (state, { payload: random }) => {
  state.random = random;
};

//
// common
//

export const fulfilled = state => {
  state.pendingAction = state.error = null;
};
export const pending = (state, action) => {
  state.pendingAction = action.type.replace(/\/pending/i, '');
};
export const rejected = (state, { payload: error }) => {
  state.pendingAction = null;
  state.error = error;
};

//
// slice
//

const initialState = {
  // extra reducers
  ingredients: [],
  category: [],
  glass: [],
  popular: [],
  random: [],

  // reducers
  recipe: {
    drink: '',
    about: '',
    category: '',
    glass: '',
    // хеш {title: measure},
    // чтобы не дублировались при добавлении
    // Учтен будет самый последний
    ingredients: {},
    instructions: '',
  },
  // thumbFile: null,
  pendingAction: null,
  error: null,
};

const addRecipeSlice = createSlice({
  name: 'addRecipe',
  initialState,

  reducers: {
    setRecipe: (state, { payload: { key, value } }) => {
      state.recipe[key] = value;
    },
    setRecipeDrink: (state, { payload: drink }) => {
      state.recipe.drink = drink;
    },
    setRecipeAbout: (state, { payload: about }) => {
      state.recipe.about = about;
    },
    setRecipeCategory: (state, { payload: category }) => {
      state.recipe.category = category;
    },
    setRecipeGlass: (state, { payload: glass }) => {
      state.recipe.glass = glass;
    },
    setRecipeInstructions: (state, { payload: instructions }) => {
      state.recipe.instructions = instructions;
    },
    setRecipeIngredients: (state, { payload: { key, value } }) => {
      state.recipe.ingredients[key] = value;
    },
    removeRecipeIngredients: (state, { payload: { key } }) => {
      delete state.recipe.ingredients[key];
    },
    // setRecipeThumbFile: (state, { payload: file }) => {
    //   state.thumbFile = file;
    // },
  },

  extraReducers: builder => {
    builder
      .addCase(thunk.fetchIngredients.fulfilled, fetchIngredientsFullfilled)
      .addCase(thunk.fetchCategory.fulfilled, fetchCategoryFullfilled)
      .addCase(thunk.fetchGlass.fulfilled, fetchGlassFullfilled)
      .addCase(thunk.fetchPopular.fulfilled, fetchPopularFullfilled)
      .addCase(thunk.fetchRandom.fulfilled, fetchRandomFullfilled)

      .addMatcher(({ type }) => type.endsWith('/fulfilled'), fulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), pending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), rejected);
  },
});

export const addRecipeReducer = addRecipeSlice.reducer;
export const addRecipesActions = addRecipeSlice.actions;
