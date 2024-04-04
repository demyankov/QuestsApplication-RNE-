import { StyleSheet, Platform } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    card: {
      width: "95%",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: scaleSize(35),
      backgroundColor: theme.colors.background,
      shadowOffset: { width: -2, height: 4 },
      shadowColor: "#171717",
      shadowOpacity: 0.2,
      shadowRadius: 3,
      borderColor: "rgba(255,255,255,0.5)",
      borderWidth: 1,
      elevation: 20,
    },
    header: {
      position: "relative",
      backgroundColor: "#fe0",
      paddingHorizontal: scaleSize(40),
      paddingVertical: scaleSize(35),
    },
    closeBtn: {
      position: "absolute",
      top: scaleSize(40),
      right: scaleSize(40),
    },
    cardShadow:
      Platform.OS === "ios"
        ? {
            shadowOffset: { width: -2, height: 4 },
            shadowColor: "#171717",
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }
        : {
            shadowColor: "#171717",
            elevation: 20,
          },
    title: {
      color: "#2b2e34",
      fontSize: scaleSize(35),
    },
    name: {
      color: "#2b2e34",
      fontSize: scaleSize(45),
      fontWeight: "700",
    },
    form: {
      paddingHorizontal: scaleSize(40),
      paddingVertical: scaleSize(35),
      gap: scaleSize(38),
    },
    text: {
      color: theme.colors.text,
      fontSize: scaleSize(30),
    },
    rateWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    dateWrapper: {
      position: "relative",
    },
    wrongDate: {
      position: "absolute",
      left: 0,
      bottom: scaleSize(-40),
      color: "red",
      fontSize: scaleSize(26),
    },
  });
