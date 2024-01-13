import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: scaleSize(200),
    height: scaleSize(200),
    borderRadius: scaleSize(100),
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
