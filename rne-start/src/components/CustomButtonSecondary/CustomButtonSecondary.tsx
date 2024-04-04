import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";
import { IconComponentMap, IconNameMap } from "../../types";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export type CustomButtonSecondaryProps<
  F extends keyof typeof IconComponentMap
> = {
  title: string;
  handleClick: () => void;
  familyIcon?: F;
  iconName?: IconNameMap[F];
  size?: number;
  iconStart?: boolean;
  iconEnd?: boolean;
  disabled?: boolean;
};

export const CustomButtonSecondary = <F extends keyof typeof IconComponentMap>({
  title,
  handleClick,
  familyIcon,
  iconName,
  size = 24,
  iconStart = false,
  iconEnd = false,
  disabled = false,
}: CustomButtonSecondaryProps<F>) => {
  const theme = useTheme();
  const { t } = useTranslation();

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
        <Text style={styles.text}>{t(title)}</Text>
        {iconEnd && (
          <Icon name={iconName} size={size} color={theme.colors.text} />
        )}
      </View>
    </TouchableHighlight>
  );
};
