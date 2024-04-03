import { createSlice } from "@reduxjs/toolkit";
import { getFavoritesAction } from "../actions";
import { toggleFavoritesAction } from "../actions/toggleFavoritesAction";

interface IFavoriteSlice {
  favorites: string[];
  loadingMessage: string;
  isLoading: boolean;
}

const initialState: IFavoriteSlice = {
  favorites: [],
  loadingMessage: "",
  isLoading: true,
};

const favoritesSlice = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    clearFavorites(state) {
      state.favorites = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFavoritesAction.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getFavoritesAction.fulfilled, (state, { payload }) => {
        state.favorites = payload;
        state.isLoading = false;
        state.loadingMessage = "";
      })
      .addCase(getFavoritesAction.rejected, (state, { error }) => {
        state.loadingMessage = error.message || "Ошибка запроса";
        state.isLoading = false;
      })
      .addCase(toggleFavoritesAction.rejected, (state, { error }) => {
        state.loadingMessage = error.message || "Ошибка запроса";
      });
  },
});

export const {
  reducer: favoritesReducer,
  actions: { clearFavorites },
} = favoritesSlice;
