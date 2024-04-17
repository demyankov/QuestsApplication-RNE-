import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";
import { generateBoxShadowStyle } from "../../services";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.card,
      borderRadius: scaleSize(12),
      padding: scaleSize(25),
      position: "relative",
    },
    shadow: generateBoxShadowStyle(-2, 4, "#4a4a4a", 0.3, 3, 15, "#4a4a4a"),
    title: {
      color: theme.colors.text,
      fontSize: scaleSize(40),
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    imageWrapper: {
      position: "relative",
      width: "100%",
      minHeight: scaleSize(550),
      overflow: "hidden",
      marginBottom: scaleSize(25),
      borderRadius: scaleSize(25),
    },
    image: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    statisticsWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: scaleSize(5),
      padding: scaleSize(20),
    },
    statisticsGroup: {
      gap: scaleSize(15),
    },
    statisticsItem: {
      flex: 1,
      flexDirection: "row",
      gap: scaleSize(25),
    },
    statisticsItemSecondary: {
      gap: scaleSize(5),
      flexDirection: "row",
      justifyContent: "space-between",
    },
    statisticsItemFist: {
      paddingHorizontal: scaleSize(10),
    },
    statisticaText: {
      fontSize: scaleSize(35),
      color: theme.colors.text,
    },
    text: {
      fontSize: scaleSize(35),
      marginBottom: scaleSize(35),
      color: theme.colors.text,
    },
    closed: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0,0,0, 0.5)",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: scaleSize(30),
    },
  });
