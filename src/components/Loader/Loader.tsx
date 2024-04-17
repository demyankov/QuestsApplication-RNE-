import { ActivityIndicator, View, useColorScheme } from "react-native";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { THEMES } from "../../constants";

export const Loader = () => {
  const theme = useTheme();
  const systemColorTheme = useColorScheme() || THEMES.DARK;

  return (
    <View
      style={[
        styles.container,
        systemColorTheme === THEMES.DARK && styles.bgDark,
      ]}
    >
      <ActivityIndicator size="large" color={theme.colors.text} />
    </View>
  );
};
