import { createSelector } from "@reduxjs/toolkit";

export const selectUserNeedVerification = state => state.auth.userNeedVerification;
export const selectIsLoading = state => state.auth.isLoading;

//drinks page
export const getRecipes = state => state.recipes.items;
export const getFilter = state => state.filter;
export const filteredContacts = createSelector(
  [getRecipes, getFilter],
  (recipes, filter) => {
    return recipes.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);