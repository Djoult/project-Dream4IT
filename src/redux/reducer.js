import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { userReducer } from './userSlice';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
// 
// import  { testReducer } from "./Cocktails/myCocktails-reduser";
import myCocktailsReducer from "./Cocktails/myCocktails-reduser";
import favoritesReduser from  "./Cocktails/favorites-reduser"
// 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = combineReducers({
  auth: persistedReducer,

  myCocktails: myCocktailsReducer,
  favorites: favoritesReduser,
  // test: testReducer


  user: userReducer,
});

