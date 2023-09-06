import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlise';
import { persistReducer } from 'redux-persist';
import { addRecipeReducer } from './addRecipe/addRecipeSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
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
});
