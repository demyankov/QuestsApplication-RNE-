import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/theme";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      alignItems: "center",
      gap: scaleSize(35),
      paddingTop: scaleSize(35),
    },
    about: {
      alignItems: "center",
    },
    name: {
      color: theme.colors.text,
      textTransform: "uppercase",
      fontWeight: "700",
      fontSize: scaleSize(35),
    },
    age: {
      color: theme.colors.text,
    },
    location: {
      color: theme.colors.text,
    },
  });
