import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginRight: scaleSize(20),
      marginVertical: scaleSize(10),
    },
  });
