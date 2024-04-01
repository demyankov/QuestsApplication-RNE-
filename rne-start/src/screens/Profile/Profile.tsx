import { ImageBackground } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import {
  ProfileStatistics,
  User,
  FavoritesQuestsList,
  CustomLink,
} from "../../components";
import { SCREENS } from "../../constants/screens";
import { useTranslation } from "react-i18next";

export const Profile = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  return (
    <ImageBackground
      source={require("../../assets/bg.jpg")}
      style={styles.wrapper}
      imageStyle={{ resizeMode: "stretch", opacity: 0.4 }}
    >
      <User />
      <ProfileStatistics />
      <CustomLink title={t("settings")} to={SCREENS.SETTINGS} />
      <CustomLink title={t("history")} to={SCREENS.HISTORY} />
      <FavoritesQuestsList />
    </ImageBackground>
  );
};
