import { Feather } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";
import { TouchableHighlight, View } from "react-native";
import { scaleSize } from "../../utils";
import { MainStackType } from "../../types";
import { SCREENS } from "../../constants";

export const Header = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { navigate } = useNavigation<MainStackType>();

  const handleClick = () => navigate(SCREENS.PROFILE);

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight onPress={handleClick}>
        <Feather
          name="settings"
          size={scaleSize(50)}
          color={theme.colors.text}
        />
      </TouchableHighlight>
    </View>
  );
};
