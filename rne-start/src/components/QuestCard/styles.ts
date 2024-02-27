import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.card,
      borderRadius: scaleSize(8),
      padding: scaleSize(25),
    },
    title: {
      color: theme.colors.text,
      fontSize: scaleSize(40),
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    imageWrapper: {
      position: "relative",
      width: "100%",
      minHeight: scaleSize(450),
      // overflow: "hidden",
      borderRadius: scaleSize(25),
    },
    image: {},
    statisticsWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: scaleSize(5),
    },
    statisticsGroup: {
      gap: scaleSize(5),
    },
    statisticsItem: {
      flex: 1,
      flexDirection: "row",
      gap: scaleSize(25),
    },
    statisticsItemSecondary: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    text: {
      fontSize: scaleSize(35),
      marginBottom: scaleSize(25),
      color: theme.colors.text,
    },
  });
