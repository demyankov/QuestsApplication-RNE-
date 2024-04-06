import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  reviews: {
    gap: scaleSize(20),
    flex: 0,
    marginVertical: scaleSize(20),
  },
});
