import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/theme";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    statisticsWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
