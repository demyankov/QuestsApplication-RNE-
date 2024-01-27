import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.card,
      borderRadius: scaleSize(8),
      padding: scaleSize(20),
      width: scaleSize(600),
      maxHeight: scaleSize(500),
    },
    title: {
      color: theme.colors.text,
      fontSize: scaleSize(40),
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    date: {
      marginBottom: scaleSize(50),
      color: theme.colors.text,
      opacity: 0.8,
      fontSize: scaleSize(25),
      textTransform: "uppercase",
    },
    text: {
      flex: 1,
      fontSize: scaleSize(35),
      marginBottom: scaleSize(25),
      color: theme.colors.text,
    },
    statisticsWrapper: {
      flexDirection: "row",
      gap: scaleSize(25),
      justifyContent: "flex-end",
    },
    statisticsItem: {
      flexDirection: "row",
      gap: scaleSize(15),
      alignItems: "center",
    },
    statisticsText: {
      gap: scaleSize(25),
      color: theme.colors.text,
    },
  });
