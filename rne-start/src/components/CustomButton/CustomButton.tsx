import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { IconComponentMap, IconNameMap } from "../../types";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export type CustomButtonProps<F extends keyof typeof IconComponentMap> = {
  title: string;
  handleClick: () => void;
  familyIcon?: F;
  iconName?: IconNameMap[F];
  size?: number;
  iconStart?: boolean;
  iconEnd?: boolean;
  disabled?: boolean;
};

export const CustomButton = <F extends keyof typeof IconComponentMap>({
  title,
  handleClick,
  familyIcon,
  iconName,
  size = 24,
  iconStart = false,
  iconEnd = false,
  disabled = false,
}: CustomButtonProps<F>) => {
  const theme = useTheme();

  const Icon: JSX.ElementType =
    (familyIcon && IconComponentMap[familyIcon]) || AntDesign;

  const gradient = ["#414042", "#1e1e1f", "#1e1e1f", "#414042"];

  return (
    <TouchableOpacity onPress={handleClick} disabled={disabled}>
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.button, disabled && styles.disabled]}
      >
        <View style={styles.wrapper}>
          {iconStart && (
            <Icon name={iconName} size={size} color={theme.colors.text} />
          )}
          <Text style={styles.text}>{title}</Text>
          {iconEnd && (
            <Icon name={iconName} size={size} color={theme.colors.text} />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
