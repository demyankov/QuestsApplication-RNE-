import { StyleSheet, Platform } from "react-native";
import { scaleSize } from "../../utils";
import { Theme } from "@react-navigation/native";

export const createStyles = (theme: Theme) => close;
StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  card: {
    width: "95%",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: scaleSize(35),
    backgroundColor: theme.colors.background,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  header: {
    position: "relative",
    backgroundColor: "#fe0",
    padding: scaleSize(40),
  },
  closeBtn: {
    position: "absolute",
    top: scaleSize(40),
    right: scaleSize(40),
  },
  cardShadow:
    Platform.OS === "ios"
      ? {
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#171717",
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }
      : {
          shadowColor: "#171717",
          elevation: 20,
        },
  price: {
    padding: scaleSize(30),
    backgroundColor: "white",
    color: "red",
    fontSize: scaleSize(40),
  },
  title: {
    color: "#2b2e34",
    fontSize: scaleSize(35),
  },
  name: {
    color: "#2b2e34",
    fontSize: scaleSize(50),
    fontWeight: "700",
  },
  dateWrapper: {
    marginTop: scaleSize(25),
    flexDirection: "row",
    gap: scaleSize(20),
  },
  date: {
    fontSize: scaleSize(45),
    color: "green",
  },
  address: {
    color: "#2b2e34",
    fontSize: scaleSize(30),
  },
  form: {
    padding: scaleSize(40),
    gap: scaleSize(35),
  },
  text: {
    color: theme.colors.text,
    fontSize: scaleSize(30),
  },
});
