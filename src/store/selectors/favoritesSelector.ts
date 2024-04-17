import { RootState } from "../types";

export const getFavoritesSelector = (state: RootState) =>
  state.favorites.favorites;

export const getFavoritesCountSelector = (state: RootState) =>
  state.favorites.favorites.length;

export const getIsFavoritesLoadingSelector = (state: RootState) =>
  state.favorites.isLoading;
