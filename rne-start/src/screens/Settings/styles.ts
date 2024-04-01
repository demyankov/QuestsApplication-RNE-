import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      padding: scaleSize(20),
      gap: scaleSize(30),
    },
    title: {
      color: theme.colors.text,
      fontSize: scaleSize(30),
      fontWeight: "bold",
      textTransform: "uppercase",
    },

    inputsWrapper: {
      gap: scaleSize(30),
    },

    error: {
      color: "red",
      fontSize: scaleSize(30),
    },
  });
