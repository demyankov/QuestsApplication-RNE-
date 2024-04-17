import { StyleSheet } from "react-native";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      paddingTop: scaleSize(15),
      flex: 1,
    },
    background: {
      flex: 1,
    },
    imageStyle: { resizeMode: "cover", opacity: 0.4 },
    title: {
      fontSize: scaleSize(45),
      marginBottom: scaleSize(15),
      textAlign: "center",
      color: theme.colors.text,
      fontWeight: "700",
    },
    text: {
      fontSize: scaleSize(30),
      marginBottom: scaleSize(15),
      marginHorizontal: scaleSize(25),
      textAlign: "center",
      color: theme.colors.text,
    },
    textShadow: {
      textShadowColor: "#000",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 3,
    },
  });
