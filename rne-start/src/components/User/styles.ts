import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/theme";
import { type Theme } from "@react-navigation/native";
import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      alignItems: "center",
      gap: scaleSize(35),
      paddingTop: scaleSize(35),
    },
    about: {
      alignItems: "center",
    },
    name: {
      color: theme.colors.text,
      textTransform: "uppercase",
      fontWeight: "700",
      fontSize: scaleSize(35),
    },
    age: {
      color: theme.colors.text,
    },
    location: {
      color: theme.colors.text,
    },

    centeredView: {
      minWidth: "100%",
      minHeight: "100%",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor: "rgba(200,200,200,0.5)",
      ...StyleSheet.absoluteFillObject,
    },
    avatarScale: {
      width: scaleSize(500),
      height: scaleSize(500),
      borderRadius: scaleSize(250),
    },
    modalView: {
      margin: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
