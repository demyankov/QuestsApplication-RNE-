import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scaleSize(20),
    paddingHorizontal: scaleSize(45),
    borderRadius: scaleSize(8),
    elevation: 3,
    borderWidth: 1,
    borderColor: "yellow",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: scaleSize(30),
  },
  text: {
    fontSize: scaleSize(32),
    lineHeight: scaleSize(36),
    textAlign: "center",
    letterSpacing: 0.3,
    color: "#ffffff",
  },
  disabled: {
    borderColor: "grey",
  },
});
