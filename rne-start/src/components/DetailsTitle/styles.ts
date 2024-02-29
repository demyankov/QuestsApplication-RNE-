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
      borderColor: theme.colors.border,
      gap: scaleSize(25),
    },
    title: {
      fontSize: scaleSize(45),
      fontWeight: "700",
      color: theme.colors.text,
    },
  });
