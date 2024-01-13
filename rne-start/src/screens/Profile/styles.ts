import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/theme";
import { type Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.text,
    },
    background: {
      flexBasis: "50%",
    },
  });
