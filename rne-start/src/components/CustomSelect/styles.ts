import { StyleSheet, Platform } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    selectWrapper: {
      position: "relative",
    },
    selectTitle: {
      color: theme.colors.text,
      fontSize: scaleSize(28),
      marginBottom: scaleSize(5),
    },
    select: {
      minWidth: "100%",
      margin: 0,
      paddingVertical: scaleSize(10),
      paddingHorizontal: scaleSize(20),
      backgroundColor: theme.colors.inputBackground,
      borderRadius: scaleSize(10),
      borderColor: theme.colors.inputBorder,
      borderWidth: 1,
      alignItems: "center",
    },
    selectText: {
      color: theme.colors.text,
      fontSize: scaleSize(28),
      textAlign: "left",
      padding: 0,
    },
    selectDropdown: {
      backgroundColor: theme.colors.inputBackground,
      borderRadius: scaleSize(10),
      borderColor: "rgba(255,255,255,0.3)",
      borderWidth: 1,
    },
    selectRow: {
      justifyContent: "flex-end",
      paddingVertical: scaleSize(10),
      borderColor: "rgba(255,255,255,0.3)",
    },
    selectRowText: {
      textAlign: "left",
      fontSize: scaleSize(28),
      paddingVertical: scaleSize(10),
      color: theme.colors.text,
    },

    warningWrapper: {
      flexDirection: "row",
      gap: scaleSize(10),
      position: "absolute",
      bottom: 0,
      left: 0,
      transform: [{ translateY: scaleSize(36) }],
      zIndex: 10,
      alignItems: "center",
    },

    warningText: {
      fontSize: scaleSize(25),
      color: "#FFAA00",
    },
  });
