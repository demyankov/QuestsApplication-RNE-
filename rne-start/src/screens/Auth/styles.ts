import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    paddingHorizontal: scaleSize(40),
  },
  tabsWrapper: {
    flexDirection: "row",
    borderColor: "#999",
    borderRadius: scaleSize(8),
    borderWidth: 1,
  },
});
