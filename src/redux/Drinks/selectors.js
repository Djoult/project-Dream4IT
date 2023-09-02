import { createSelector } from "@reduxjs/toolkit";

export const getRecipes = state => state.recipes.items;
export const getFilter = state => state.filter;
export const filteredRecipes = createSelector(
  [getRecipes, getFilter],
  (recipes, filter) => {
    return recipes.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);