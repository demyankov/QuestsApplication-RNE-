import { View, Text, Switch, useColorScheme, Button } from "react-native";
import { styles } from "./styles";
import {
  getActiveTheme,
  toggleTheme,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { THEMES } from "../../constants/theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SCREENS } from "../../constants/screens";
import { RootStackParamList } from "../../navigation/AppStack";
import { LinearGradient } from "expo-linear-gradient";

type ProfileProps = NativeStackScreenProps<RootStackParamList, SCREENS.PROFILE>;

export const Profile = ({ navigation }: ProfileProps) => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(getActiveTheme);
  const toggleSwitch = (): any => dispatch(toggleTheme());
  const colorScheme = useColorScheme();

  const isEnabled = currentTheme === THEMES.DARK;

  const navigateTo = (to: SCREENS): void => navigation.navigate(to);

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.background}
      >
        <Text>Sign in with Facebook</Text>
      </LinearGradient>
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
      <View>
        <Button title="POSTS" onPress={() => navigateTo(SCREENS.POSTS)} />
        <Button
          title="SUBSCRIBERS"
          onPress={() => navigateTo(SCREENS.SUBSCRIBERS)}
        />
        <Button
          title="SUBSCRIPTONS"
          onPress={() => navigateTo(SCREENS.SUBSCRIPTONS)}
        />
      </View>
    </View>
  );
};
