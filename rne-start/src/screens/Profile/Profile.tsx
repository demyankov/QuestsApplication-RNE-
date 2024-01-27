import { View } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import {
  ProfileStatistics,
  User,
  CustomButton,
  LastPostsList,
} from "../../components";
import { SCREENS } from "../../constants/screens";
import { useTranslation } from "react-i18next";

export const Profile = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <User />
      <ProfileStatistics />
      <CustomButton title={t("settings")} to={SCREENS.SETTINGS} />
      <LastPostsList />
    </View>
  );
};
