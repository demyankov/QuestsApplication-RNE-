import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native";

export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeType = {
  [THEMES.LIGHT]: Theme;
  [THEMES.DARK]: Theme;
};

export const theme: ThemeType = {
  [THEMES.LIGHT]: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "#000000",
      background: "#eee",
      border: "#0d8c2f",
    },
  },
  [THEMES.DARK]: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      text: "#ffffff",
      background: "#474644",
      border: "#ede02b",
    },
  },
};
