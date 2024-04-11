import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    reviews: {
      gap: scaleSize(20),
      flex: 0,
      marginVertical: scaleSize(20),
    },
    text: {
      fontSize: scaleSize(35),
      color: theme.colors.text,
      marginTop: scaleSize(20),
    },
  });
