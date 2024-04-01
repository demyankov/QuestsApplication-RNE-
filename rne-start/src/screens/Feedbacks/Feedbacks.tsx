import { ImageBackground } from "expo-image";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

export const Feedbacks = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.wrapper}
        source={require("../../assets/bg.jpg")}
        imageStyle={{ resizeMode: "cover", opacity: 0.4 }}
      >
        <Text>отзывы</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
