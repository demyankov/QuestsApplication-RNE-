import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: scaleSize(20),
      paddingHorizontal: scaleSize(45),
      borderColor: theme.colors.border,
      borderRadius: scaleSize(8),
      borderWidth: 1,
    },
    wrapper: {
      flexDirection: "row",
      gap: scaleSize(20),
    },
    text: {
      fontSize: scaleSize(30),
      color: theme.colors.text,
    },
    clicked: {
      backgroundColor: "green",
      borderColor: "green",
    },
    clickedText: {
      color: "white",
    },
  });
