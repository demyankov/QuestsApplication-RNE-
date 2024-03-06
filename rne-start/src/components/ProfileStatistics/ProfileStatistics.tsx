import { View } from "react-native";
import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import { SCREENS } from "../../constants/screens";
import { createStyles } from "./styles";
import { getUserSelector, useAppSelector } from "../../store";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { statistics } from "./config";

export const ProfileStatistics = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const user = useAppSelector(getUserSelector);
  const { t } = useTranslation();

  return (
    <View style={styles.statisticsWrapper}>
      {statistics.map(({ text, iconColor, countName, to }) => (
        <StatisticsItem
          text={t(text)}
          iconColor={iconColor}
          count={user[countName]}
          to={SCREENS.FOLLOWERS}
        />
      ))}

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
