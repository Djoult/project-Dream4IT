import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, instance as axios } from '../../api/auth';

const route = {
  getIngredients: 'api/recipes/ingredient-list?limit=200',
  getCategory: 'api/recipes/category-list',
  getPopular: 'api/recipes/popular?limit=10',
  getRandom: 'api/recipes/search?samples=10&thumb',
  getGlass: 'api/glass',
};

const getPersisted = (key, root = 'addRecipe') => {
  try {
    const persistedData = JSON.parse(localStorage.getItem(`persist:${root}`));
    return JSON.parse(persistedData[key]);
  } catch {
    return null;
  }
};

export const fetchIngredients = createAsyncThunk(
  'addRecipe/fetchIngredients',
  async (arg, thunkApi) => {
    try {
      const state = thunkApi.getState();
      setToken(state.auth.token);

      // подтягиваем из ЛС
      const persisted = getPersisted('ingredients');
      if (persisted.length) return persisted;

      const { data } = await axios.get(route.getIngredients);
      return data.hits;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const fetchCategory = createAsyncThunk(
  'addRecipe/fetchCategory',
  async (arg, thunkApi) => {
    try {
      const state = thunkApi.getState();
      setToken(state.auth.token);

      // подтягиваем из ЛС
      const persisted = getPersisted('category');
      if (persisted.length) return persisted;

      const { data } = await axios.get(route.getCategory);
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const fetchGlass = createAsyncThunk(
  'addRecipe/fetchGlass',
  async (arg, thunkApi) => {
    try {
      const state = thunkApi.getState();
      setToken(state.auth.token);

      // подтягиваем из ЛС
      // TODO: надо обновлять, например, раз в сутки
      // или как - то еще динамичнее
      const persisted = getPersisted('glass');
      if (persisted.length) return persisted;

      const { data } = await axios.get(route.getGlass);
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const fetchPopular = createAsyncThunk(
  'addRecipe/fetchPopular',
  async (arg, thunkApi) => {
    try {
      const state = thunkApi.getState();
      setToken(state.auth.token);

      // подтягиваем из ЛС
      const persisted = getPersisted('popular');
      if (persisted.length) return persisted;

      const { data } = await axios.get(route.getPopular);
      return data.hits;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const fetchRandom = createAsyncThunk(
  'addRecipe/fetchRandom',
  async (arg, thunkApi) => {
    try {
      const state = thunkApi.getState();
      setToken(state.auth.token);

      // в ЛС не сохраянем - всегда тянем новые
      const { data } = await axios.get(route.getRandom);
      return data.hits;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);
