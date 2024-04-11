import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";
import { TouchableHighlight, View } from "react-native";
import { scaleSize } from "../../utils";
import { MainStackType } from "../../types";
import { SCREENS } from "../../constants";
import {
  getIsAuthSelector,
  getQuestsAction,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export const Header = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { navigate } = useNavigation<MainStackType>();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getIsAuthSelector);

  const handleClick = () =>
    isAuth ? navigate(SCREENS.PROFILE) : navigate(SCREENS.AUTH);

  const handleReload = () => dispatch(getQuestsAction("questsDetails"));

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight onPress={handleReload}>
        <Ionicons
          name="reload"
          size={scaleSize(50)}
          color={theme.colors.text}
        />
      </TouchableHighlight>

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
