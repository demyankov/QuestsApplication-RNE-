import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.item, styles.item_1]}>Text 1</Text>
      <Text style={[styles.item, styles.item_2]}>Text 2</Text>
      <Text style={[styles.item, styles.item_3]}>Text 3</Text>
    </View>
  );
}
