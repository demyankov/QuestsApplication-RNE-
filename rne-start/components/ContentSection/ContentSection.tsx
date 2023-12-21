import { ScrollView, View, Text, TextInput, Image } from "react-native";
import { styles } from "./styles";

export default function ContentSection() {
  return (
    <View>
      <Text>Демьянков Александр</Text>
      <TextInput placeholder="Enter text" />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Image
          style={styles.image}
          source={require("../../assets/image.png")}
          alt="image"
        />
      </ScrollView>
    </View>
  );
}
