import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      fontSize: scaleSize(35),
      color: theme.colors.text,
    },
    buttonsWrapper: {
      marginTop: scaleSize(30),
      flexDirection: "row",
      gap: scaleSize(25),
    },
    dateWrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: scaleSize(25),
      marginVertical: scaleSize(25),
    },
    date: {
      color: theme.colors.text,
      fontWeight: "600",
      fontSize: scaleSize(35),
      gap: scaleSize(25),
    },
    day: {
      fontSize: scaleSize(35),
      color: theme.colors.text,
    },
    slotsGroup: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: scaleSize(25),
      marginBottom: scaleSize(20),
    },
  });
