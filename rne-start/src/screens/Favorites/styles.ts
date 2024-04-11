import { StyleSheet } from "react-native";
import { Theme } from "@react-navigation/native";

import { scaleSize } from "../../utils";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: scaleSize(35),
      color: theme.colors.text,
      marginTop: scaleSize(20),
    },
  });
