import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";
import { SLOT_STATUS } from "../../constants";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    slot: {
      flexBasis: "22%",
      borderRadius: scaleSize(12),
      backgroundColor: "yellow",
      padding: scaleSize(10),
    },
    time: {
      color: theme.colors.background,
      fontSize: scaleSize(40),
      borderBottomWidth: 1,
      borderColor: theme.colors.background,
      textAlign: "center",
    },
    description: {
      color: theme.colors.background,
      fontSize: scaleSize(30),
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
