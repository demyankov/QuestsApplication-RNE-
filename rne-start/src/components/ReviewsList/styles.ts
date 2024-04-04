import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    title: {
      color: theme.colors.text,
      fontSize: scaleSize(30),
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    wrapper: {
      gap: scaleSize(20),
      flex: 0,
      marginBottom: scaleSize(40),
    },
  });
