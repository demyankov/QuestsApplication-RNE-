import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { SCREENS } from "../../constants/screens";
import { useNavigation } from "@react-navigation/native";
import { MainStackType } from "../../types";
import { LinearGradient } from "expo-linear-gradient";

interface CustomButtonProps {
  title: string;
  to?: SCREENS;
  options?: { questId: string };
}

export const CustomLink = ({
  title,
  to = SCREENS.MAIN,
  options,
}: CustomButtonProps) => {
  const { navigate } = useNavigation<MainStackType>();
  const navigateTo = () =>
    to === SCREENS.QUESTDETAILS ? navigate(to, options) : navigate(to);

  const gradient = ["#414042", "#1e1e1f", "#1e1e1f", "#414042"];

  return (
    <Pressable onPress={navigateTo}>
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};
