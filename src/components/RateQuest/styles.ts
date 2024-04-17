import { StyleSheet, Platform } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text,
      fontSize: scaleSize(30),
      marginBottom: scaleSize(20),
    },
    rateWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
