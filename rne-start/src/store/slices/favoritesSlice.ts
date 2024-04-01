import { createSlice } from "@reduxjs/toolkit";
import { getFavoritesAction } from "../actions";
import { toggleFavoritesAction } from "../actions/toggleFavoritesAction";

interface IFavoriteSlice {
  favorites: string[];
  loadingMessage: string;
}

const initialState: IFavoriteSlice = {
  favorites: [],
  loadingMessage: "",
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
      .addCase(getFavoritesAction.fulfilled, (state, { payload }) => {
        state.favorites = payload;
        state.loadingMessage = "";
      })
      .addCase(getFavoritesAction.rejected, (state, { error }) => {
        state.loadingMessage = error.message || "Ошибка запроса";
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
