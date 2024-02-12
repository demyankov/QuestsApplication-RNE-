import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";

export const styles = StyleSheet.create({
  avatarWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: scaleSize(200),
    height: scaleSize(200),
    borderRadius: scaleSize(100),
    borderColor: "black",
    borderWidth: 1,
  },
});
