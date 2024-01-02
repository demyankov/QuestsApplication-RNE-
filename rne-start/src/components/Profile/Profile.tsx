import { View, Text, Switch } from "react-native";
import { styles } from "./styles";
import {
  THEMES,
  getActiveTheme,
  toggleTheme,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export default function Header() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getActiveTheme);
  const toggleSwitch = (): any => dispatch(toggleTheme());

  const isEnabled = theme === THEMES.DARK;

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
      <Text>dfdf12wsw1 {theme}</Text>
    </View>
  );
}
