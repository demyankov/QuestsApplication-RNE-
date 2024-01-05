import { View, Text, Switch, useColorScheme } from "react-native";
import { styles } from "./styles";
import {
  getActiveTheme,
  toggleTheme,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { THEMES } from "../../constants/theme";

export default function Header() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(getActiveTheme);
  const toggleSwitch = (): any => dispatch(toggleTheme());
  const colorScheme = useColorScheme();

  const isEnabled = currentTheme === THEMES.DARK;

  return (
    <View style={styles.wrapper}>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>dfdf12wsw1 {currentTheme}</Text>
      <Text>dfdf12wsw1 {colorScheme}</Text>
    </View>
  );
}
