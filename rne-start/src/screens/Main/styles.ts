import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      paddingVertical: scaleSize(25),
    },
    title: {
      fontSize: scaleSize(50),
      marginBottom: scaleSize(25),
      textAlign: "center",
      color: theme.colors.text,
      fontWeight: "700",
    },
    text: {
      fontSize: scaleSize(35),
      marginBottom: scaleSize(25),
      textAlign: "center",
      color: theme.colors.text,
    },
  });
