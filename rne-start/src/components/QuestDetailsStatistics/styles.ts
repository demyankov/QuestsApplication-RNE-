import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      gap: scaleSize(5),
    },
    text: {
      fontSize: scaleSize(35),
      marginBottom: scaleSize(35),
      color: theme.colors.text,
    },
    statisticsItem: {
      flexDirection: "row",
      gap: scaleSize(20),
    },
  });
