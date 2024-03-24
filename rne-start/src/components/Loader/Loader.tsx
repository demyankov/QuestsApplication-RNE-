import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

export const Loader = () => (
  <View style={[styles.container]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);
