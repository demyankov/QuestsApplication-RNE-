import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: scaleSize(150),
    height: scaleSize(150),
  },
});
