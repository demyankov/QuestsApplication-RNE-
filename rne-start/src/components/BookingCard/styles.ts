import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    card: {
      paddingVertical: scaleSize(100),
      justifyContent: "center",
    },
    title: { color: theme.colors.text },
    text: { color: theme.colors.text },
  });
