import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";
import { SLOT_STATUS } from "../../constants";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: scaleSize(15),
    },
    text: {
      color: theme.colors.text,
      fontSize: scaleSize(35),
    },
    header: {
      position: "relative",
      justifyContent: "center",
      minHeight: scaleSize(500),
    },
    banner: {
      ...StyleSheet.absoluteFillObject,
    },
    title: {
      color: theme.colors.text,
      textTransform: "uppercase",
      fontSize: scaleSize(45),
      fontWeight: "600",
      marginVertical: scaleSize(30),
    },
    name: {
      fontSize: scaleSize(60),
      fontWeight: "700",
      color: "white",
      textAlign: "center",
    },
    genre: {
      color: "white",
      textAlign: "center",
    },
    address: {
      color: "white",
      textAlign: "center",
      opacity: 0.8,
    },

    buttonsWrapper: {
      flexDirection: "row",
      gap: scaleSize(25),
    },
  });
