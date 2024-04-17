import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";
import * as Localization from "expo-localization";
import { TouchableHighlight, View } from "react-native";
import { scaleSize } from "../../utils";
import { MainStackType } from "../../types";
import { SCREENS } from "../../constants";
import {
  getQuestsAction,
  getUserIdSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export const Header = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { navigate } = useNavigation<MainStackType>();
  const dispatch = useAppDispatch();
  const userId = useAppSelector(getUserIdSelector);
  const language = Localization.locale.substring(0, 2);
  const collection = language === "en" ? "questDetailsEn" : "questsDetails";

  const handleClick = () =>
    userId ? navigate(SCREENS.PROFILE) : navigate(SCREENS.AUTH);

  const handleReload = () => dispatch(getQuestsAction(collection));

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
