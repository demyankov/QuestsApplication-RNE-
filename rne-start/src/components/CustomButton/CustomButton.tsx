import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { SCREENS } from "../../constants/screens";
import { useNavigation } from "@react-navigation/native";
import { MainStackType } from "../../types";

interface CustomButtonProps {
  title: string;
  handleClick: () => void;
}

export const CustomButton = ({ title, handleClick }: CustomButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={handleClick}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
