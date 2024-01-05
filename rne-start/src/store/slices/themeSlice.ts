import { createSlice } from "@reduxjs/toolkit";
import { THEMES } from "../../constants/theme";

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
