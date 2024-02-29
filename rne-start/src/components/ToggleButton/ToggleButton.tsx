import { Text, TouchableHighlight, View } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { IconComponentMap, IconNameMap } from "../../types";

export type ToggleButtonProps<F extends keyof typeof IconComponentMap> = {
  title: string;
  clicked?: boolean;
  handleClick: () => void;
  familyIcon?: F;
  iconName?: IconNameMap[F];
  size?: number;
};

export const ToggleButton = <F extends keyof typeof IconComponentMap>({
  title,
  clicked = false,
  handleClick,
  familyIcon,
  iconName,
  size = 20,
}: ToggleButtonProps<F>) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const Icon: JSX.ElementType =
    (familyIcon && IconComponentMap[familyIcon]) || AntDesign;

  return (
    <TouchableHighlight
      style={[styles.button, clicked && styles.clicked]}
      onPress={handleClick}
    >
      <View style={styles.wrapper}>
        <Icon name={iconName} size={size} color="yellow" />
        <Text style={[styles.text, clicked && styles.clickedText]}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
