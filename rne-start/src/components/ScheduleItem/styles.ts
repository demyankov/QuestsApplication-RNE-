import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";
import { SLOT_STATUS } from "../../constants";
import { generateBoxShadowStyle } from "../../services";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    slot: {
      flexBasis: "22%",
      borderRadius: scaleSize(12),
      backgroundColor: "yellow",
      padding: scaleSize(10),
    },
    shadow: generateBoxShadowStyle(-2, 4, "#fff", 0.3, 3, 10, "#fff"),
    time: {
      color: theme.colors.background,
      fontSize: scaleSize(40),
      borderBottomWidth: 1,
      borderColor: theme.colors.background,
      textAlign: "center",
    },
    description: {
      color: theme.colors.background,
      fontSize: scaleSize(26),
      textAlign: "center",
    },
    [SLOT_STATUS.CLOSED]: {
      backgroundColor: "transparent",
      color: "rgb(180,180,180)",
      borderColor: "rgb(180,180,180)",
    },
    [SLOT_STATUS.BOOKED]: {
      backgroundColor: "transparent",
      color: "red",
      borderColor: "red",
    },
  });
