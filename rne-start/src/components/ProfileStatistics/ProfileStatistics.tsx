import { View } from "react-native";
import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import { SCREENS } from "../../constants/screens";
import { createStyles } from "./styles";
import { getUserSelector, useAppSelector } from "../../store";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export const ProfileStatistics = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const user = useAppSelector(getUserSelector);
  const { t } = useTranslation();

  return (
    <View style={styles.statisticsWrapper}>
      <StatisticsItem
        text={t("followers")}
        iconColor="#f2440f"
        count={user.countOfFollowers}
        to={SCREENS.FOLLOWERS}
      />
      <StatisticsItem
        text={t("follows")}
        iconColor="#81f20f"
        count={user.countOfFollows}
        to={SCREENS.FOLLOW}
      />
      <StatisticsItem
        text={t("posts")}
        iconColor="#ee0ff2"
        count={user.countOfPosts}
        to={SCREENS.POSTS}
      />
    </View>
  );
};
