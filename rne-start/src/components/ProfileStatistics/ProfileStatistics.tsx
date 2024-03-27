import { View } from "react-native";
import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
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
      {statistics.map(({ text, iconColor, selector, to }) => {
        const count = useAppSelector(selector);

        return (
          <StatisticsItem
            key={to}
            text={t(text)}
            iconColor={iconColor}
            count={count}
            to={to}
          />
        );
      })}
    </View>
  );
};
