export const selectUserNeedVerification = state =>
  state.auth.userNeedVerification;

export const selectIsLoading = state => state.auth.isLoading;

export const getMyCocktails = state => state.myCocktails.items;
export const loadingMyCocktails = (state) => state.myCocktails.loading;
export const getFavorites = ({favorites}) => favorites.items;
export const loadingFavorites = (state) => state.favorites.loading;

export const selectCurrentUser = state => state.user.currentUser;
