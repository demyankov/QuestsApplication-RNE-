import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    titleItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: scaleSize(30),
      marginVertical: scaleSize(50),
      borderBottomWidth: 3,
      borderTopWidth: 3,
      borderStyle: "dotted",
      borderColor: "yellow",
      gap: scaleSize(25),
    },
    title: {
      fontSize: scaleSize(45),
      textShadowColor: "#000",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
      fontWeight: "700",
      color: theme.colors.text,
    },
  });
