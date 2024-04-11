import { StyleSheet, Platform } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    form: {
      paddingHorizontal: scaleSize(40),
      paddingVertical: scaleSize(35),
      gap: scaleSize(38),
    },
  });
