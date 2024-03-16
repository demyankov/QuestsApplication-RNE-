import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scaleSize(20),
    paddingHorizontal: scaleSize(45),
    borderRadius: scaleSize(8),
    elevation: 3,
    backgroundColor: "#2b9ced",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: scaleSize(30),
  },
  text: {
    position: "relative",
    zIndex: 1000000,
    fontSize: scaleSize(32),
    lineHeight: scaleSize(36),
    textAlign: "center",
    letterSpacing: 0.3,
    color: "#ffffff",
  },
  disabled: {
    borderColor: "grey",
    backgroundColor: "grey",
  },
});
