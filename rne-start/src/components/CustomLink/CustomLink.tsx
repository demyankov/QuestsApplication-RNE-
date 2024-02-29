import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { SCREENS } from "../../constants/screens";
import { useNavigation } from "@react-navigation/native";
import { MainStackType } from "../../types";

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

  return (
    <Pressable style={styles.button} onPress={navigateTo}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
