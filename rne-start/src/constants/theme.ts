import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
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
      text: '#000000',
      background: '#eee',
      border: '#0d8c2f',
      card: '#aaa',
      inputBorder: '#444444',
      inputBackground: '#eee',
    },
  },
  [THEMES.DARK]: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      text: '#ffffff',
      background: '#222',
      border: '#ede02b',
      card: '#444',
      inputBorder: '#ffffff',
      inputBackground: '#222',
    },
  },
};
