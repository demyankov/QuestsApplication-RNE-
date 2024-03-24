import { RootState } from "../types";

export const getFavoritesSelector = (state: RootState) =>
  state.favorites.favorites;
