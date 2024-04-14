import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { createStyles } from "./styles";
import { statistics } from "./config";

import { StatisticsItem } from "../StatisticsItem/StatisticsItem";

import { getsAverageRatingSelector, useAppSelector } from "../../store";

export const ProfileStatistics = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  const averageRating = useAppSelector(getsAverageRatingSelector);

  return (
    <View style={{ minWidth: "100%" }}>
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
      <View style={styles.statisticsReviews}>
        <Text style={styles.text}>{`${t(
          "averageRating"
        )} - ${averageRating}`}</Text>
      </View>
    </View>
  );
};
