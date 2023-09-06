import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, instance as axios } from '../../api/auth';

const route = {
  getIngredients: 'api/recipes/ingredient-list?limit=200',
  getCategory: 'api/recipes/category-list',
  getPopular: 'api/recipes/popular?limit=10',
  getRandom: 'api/recipes/search?samples=10&thumb',
  getGlass: 'api/glass',
};

export const fetchIngredients = createAsyncThunk(
  'addRecipe/fetchIngredients',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      const persisted = state.ingredients;
      if (persisted.length) return persisted;

      setToken(state.auth.token);
      const { data } = await axios.get(route.getIngredients);
      return data.hits;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
  {
    // отменяем диспатчинг, иначе будет задержка в компонентах
    // Даже если не произойдет запрос на бек
    condition: (_, { getState }) => {
      const { ingredients } = getState();
      if (ingredients.length) return false;
    },
  }
);

export const fetchCategory = createAsyncThunk(
  'addRecipe/fetchCategory',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      const persisted = state.category;
      if (persisted.length) return persisted;

      setToken(state.auth.token);
      const { data } = await axios.get(route.getCategory);
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { category } = getState();
      if (category.length) return false;
    },
  }
);

export const fetchGlass = createAsyncThunk(
  'addRecipe/fetchGlass',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      // TODO: надо обновлять, например, раз в сутки
      // или как - то еще динамичнее
      const persisted = state.glass;
      if (persisted.length) return persisted;

      setToken(state.auth.token);
      const { data } = await axios.get(route.getGlass);
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { glass } = getState();
      if (glass.length) return false;
    },
  }
);

export const fetchPopular = createAsyncThunk(
  'addRecipe/fetchPopular',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      // подтягиваем из ЛС
      const persisted = state.popular;
      if (persisted?.length) return persisted;

      setToken(state.auth.token);
      const { data } = await axios.get(route.getPopular);
      return data.hits;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { popular } = getState();
      if (popular?.length) return false;
    },
  }
);

export const fetchRandom = createAsyncThunk(
  'addRecipe/fetchRandom',
  async (arg, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      setToken(state.auth.token);

      // в ЛС не сохраянем - всегда тянем новые
      const { data } = await axios.get(route.getRandom);
      return data.hits;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
