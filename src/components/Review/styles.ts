import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.card,
      borderRadius: scaleSize(8),
      padding: scaleSize(20),
      paddingRight: scaleSize(80),
      width: scaleSize(750),
      maxWidth: "100%",
      minHeight: scaleSize(450),
      position: "relative",
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
      color: theme.colors.text,
      marginBottom: scaleSize(35),
    },
    name: {
      fontSize: scaleSize(30),
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
    deleteIcon: {
      position: "absolute",
      width: scaleSize(50),
      height: scaleSize(50),
      top: scaleSize(28),
      right: scaleSize(28),
    },
  });
