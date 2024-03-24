import { createSlice } from "@reduxjs/toolkit";

interface IFavoriteSlice {
  favorites: string[];
  isLoading: boolean;
}

const initialState: IFavoriteSlice = {
  favorites: [],
  isLoading: true,
};

const favoriteQuestsSlice = createSlice({
  name: "FavoriteQuests",
  initialState,
  reducers: {
    toggleFavorite(state, { payload }: { payload: string }) {
      if (state.favorites.includes(payload)) {
        state.favorites = state.favorites.filter((id) => id !== payload);
        return;
      }

      state.favorites = [...state.favorites, payload];
    },

    deleteAllFavorites(state) {
      state.favorites = [];
    },
  },
});

export const {
  reducer: favoriteQuestsReducer,
  actions: { toggleFavorite, deleteAllFavorites },
} = favoriteQuestsSlice;
