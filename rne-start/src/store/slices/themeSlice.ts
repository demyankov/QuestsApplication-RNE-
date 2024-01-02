import { createSlice } from "@reduxjs/toolkit";

export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

export interface Theme {
  theme: THEMES;
  number: number;
}

const initialState: Theme = {
  theme: THEMES.LIGHT,
  number: 0,
};

const themeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    },
  },
});

export const {
  reducer: themeReducer,
  actions: { toggleTheme },
} = themeSlice;
