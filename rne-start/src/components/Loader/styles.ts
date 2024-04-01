import { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "RGBA(255,255,255,0.15)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgDark: {
    backgroundColor: "RGBA(0,0,0,0.15)",
  },
});
