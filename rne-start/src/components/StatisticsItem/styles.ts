import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    item: {
      flex: 1,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderColor: theme.colors.border,
    },
    wrapper: {
      alignItems: "center",
    },
    text: {
      color: theme.colors.text,
      textTransform: "uppercase",
    },
    count: {
      color: theme.colors.text,
      fontSize: scaleSize(45),
      fontWeight: "bold",
    },
  });
