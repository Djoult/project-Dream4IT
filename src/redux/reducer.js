import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { userReducer } from './userSlice';
import { persistReducer } from 'redux-persist';
import { addRecipeReducer } from './addRecipe/addRecipeSlice';
import storage from 'redux-persist/lib/storage';
//
// import  { testReducer } from "./Cocktails/myCocktails-reduser";
import myCocktailsReducer from './Cocktails/myCocktails-reduser';
import favoritesReduser from './Cocktails/favorites-reduser';
//
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

// addRecipe
const addRecipe = persistReducer(
  {
    key: 'addRecipe',
    storage,
    whitelist: ['ingredients', 'category', 'glass', 'popular'],
  },
  addRecipeReducer
);

export const reducer = combineReducers({
  auth: persistedReducer,
  addRecipe,

  myCocktails: myCocktailsReducer,
  favorites: favoritesReduser,
  // test: testReducer

  user: userReducer,
});
