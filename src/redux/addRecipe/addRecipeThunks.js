import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, instance as axios } from '../../api/auth';

// axios.defaults.baseURL = 'http://localhost:3000';

// костыль
const getPersisted = (key, root = 'addRecipe') => {
  try {
    const persistedData = JSON.parse(localStorage.getItem(`persist:${root}`));
    return JSON.parse(persistedData[key]);
  } catch {
    return null;
  }
};

const route = {
  getIngredients: 'api/recipes/ingredient-list?limit=200',
  getCategory: 'api/recipes/category-list',
  getPopular: 'api/recipes/popular?limit=10',
  getRandom: 'api/recipes/search?samples=10&thumb',
  getGlass: 'api/glass',
  postRecipe: 'api/recipes/own',
};

export const fetchIngredients = createAsyncThunk(
  'addRecipe/fetchIngredients',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      // const persisted = state.ingredients;
      // if (persisted.length) return persisted;
      const persisted = getPersisted('ingredients');
      if (persisted.length) return persisted;

      setToken(state.auth.token);
      const { data } = await axios.get(route.getIngredients);
      return data.hits;
    } catch (error) {
      //console.log(error);
      return rejectWithValue(error?.message);
    }
  }
  // {
  //   // отменяем диспатчинг, иначе будет задержка в компонентах
  //   // Даже если не произойдет запрос на бек
  //   condition: (_, { getState }) => {
  //     const { ingredients } = getState();
  //     if (ingredients.length) return false;
  //   },
  // }
);

export const fetchCategory = createAsyncThunk(
  'addRecipe/fetchCategory',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      // const persisted = state.category;
      // if (persisted.length) return persisted;
      const persisted = getPersisted('category');
      if (persisted.length) return persisted;

      setToken(state.auth.token);
      const { data } = await axios.get(route.getCategory);
      return data;
    } catch (error) {
      //console.log(error);
      return rejectWithValue(error?.message);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const { category } = getState();
  //     if (category.length) return false;
  //   },
  // }
);

export const fetchGlass = createAsyncThunk(
  'addRecipe/fetchGlass',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      // const persisted = state.glass;
      // if (persisted.length) return persisted;
      const persisted = getPersisted('glass');
      if (persisted.length) return persisted;

      setToken(state.auth.token);
      const { data } = await axios.get(route.getGlass);
      return data;
    } catch (error) {
      //console.log(error);
      return rejectWithValue(error?.message);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const { glass } = getState();
  //     if (glass.length) return false;
  //   },
  // }
);

export const fetchPopular = createAsyncThunk(
  'addRecipe/fetchPopular',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      // TODO: надо обновлять, например, раз в сутки
      // или как - то еще динамичнее
      // const persisted = state.popular;
      // if (persisted?.length) return persisted;
      const persisted = getPersisted('popular');
      if (persisted.length) return persisted;

      setToken(state.auth.token);
      const { data } = await axios.get(route.getPopular);
      return data.hits;
    } catch (error) {
      //console.log(error);
      return rejectWithValue(error?.message);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const { popular } = getState();
  //     if (popular?.length) return false;
  //   },
  // }
);

export const fetchRandom = createAsyncThunk(
  'addRecipe/fetchRandom',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      setToken(state.auth.token);

      const persisted = getPersisted('random');
      if (persisted.length) return persisted;

      const { data } = await axios.get(route.getRandom);
      return data.hits;
    } catch (error) {
      //console.log(error);
      return rejectWithValue(error?.message);
    }
  }
);

export const addRecipeToDatabase = createAsyncThunk(
  'addRecipe/addRecipeToDatabase',
  async (formData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      setToken(state.auth.token);

      const { data } = await axios.post(route.postRecipe, formData);
      return data;
    } catch (error) {
      console.log(error);
      error.details = JSON.parse(error.request.responseText).message;
      return rejectWithValue(error);
    }
  }
);
