import { View, Text, useColorScheme, Button } from "react-native";
import { createStyles } from "./styles";
import { SCREENS } from "../../constants/screens";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { THEMES } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";
import { MainStackType } from "../../types";
import { UserIcon } from "../../components";

export const Profile = () => {
  const navigation = useNavigation<MainStackType>();
  const theme = useTheme();
  const styles = createStyles(theme);

  const navigateTo = (to: SCREENS): void => navigation.navigate(to);

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.background}
      ></LinearGradient>
      <UserIcon />
      <View>
        <Button title="POSTS" onPress={() => navigateTo(SCREENS.POSTS)} />
        <Button
          title="FOLLOWERS"
          onPress={() => navigateTo(SCREENS.FOLLOWERS)}
        />
        <Button title="FOLLOW" onPress={() => navigateTo(SCREENS.FOLLOW)} />
      </View>
    </View>
  );
};
