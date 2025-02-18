import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";
import { Platform } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: scaleSize(20),
      paddingHorizontal: scaleSize(45),
      borderColor: "#999",
      borderRadius: scaleSize(8),
      borderWidth: 1,
    },
    width: {
      width: "100%",
    },
    wrapper: {
      flexDirection: "row",
      gap: scaleSize(20),
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: scaleSize(30),
      color: theme.colors.text,
    },
    clicked: {
      backgroundColor: "#8300FF",
    },
    clickedText: {
      color: "white",
    },
    withoutBorder: {
      borderWidth: 0,
      borderRadius: 0,
    },
  });
