import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      gap: scaleSize(40),
      padding: scaleSize(20),
    },
    text: {
      fontSize: scaleSize(35),
      marginBottom: scaleSize(25),
      color: theme.colors.text,
    },
  });
