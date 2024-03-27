import { ImageBackground, View } from "react-native";
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
      source={{
        uri: "https://cdn.photoroom.com/v1/assets-cached.jpg?path=backgrounds_v3/black/Photoroom_black_background_extremely_fine_texture_only_black_co_a4384a80-67ef-40ef-98f3-3bb460bf6e1f.jpg",
      }}
      resizeMode="cover"
      style={styles.wrapper}
    >
      <User />
      <ProfileStatistics />
      <CustomLink title={t("settings")} to={SCREENS.SETTINGS} />
      <FavoritesQuestsList />
    </ImageBackground>
  );
};
