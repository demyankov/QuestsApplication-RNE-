import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: "center",
      gap: scaleSize(50),
      backgroundColor: theme.colors.background,
    },
  });
