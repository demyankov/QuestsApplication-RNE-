import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";
import { IconComponentMap, IconNameMap } from "../../types";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";

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

  return (
    <TouchableHighlight
      style={[styles.button, disabled && styles.disabled]}
      onPress={handleClick}
      disabled={disabled}
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
    </TouchableHighlight>
  );
};
