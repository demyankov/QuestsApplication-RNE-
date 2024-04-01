import { Pressable, Text, View } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { IconComponentMap, IconNameMap } from "../../types";
import { LinearGradient } from "expo-linear-gradient";

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

  const gradient = clicked
    ? ["#666668", "#3e3e40", "#3e3e40", "#666668"]
    : ["transparent", "transparent"];

  return (
    <LinearGradient
      colors={gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.button}
    >
      <Pressable onPress={handleClick} style={{ width: "100%" }}>
        <View style={styles.wrapper}>
          <Icon
            name={iconName}
            size={size}
            color={clicked ? "yellow" : "#cdcbd1"}
          />
          <Text style={[styles.text, clicked && styles.clickedText]}>
            {title}
          </Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};
