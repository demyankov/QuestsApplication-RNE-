import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import { MainStackParamsList } from "../../types";
import {
  useAppSelector,
  getSchedule,
  useAppDispatch,
  setSchedule,
} from "../../store";
import { createStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../services";
import { getDayOfWeek } from "../../services/getDayOfWeek";
import { useEffect } from "react";
import { ScheduleItem } from "../ScheduleItem/ScheduleItem";

export const Schedule = () => {
  const schedule = useAppSelector(getSchedule);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { params } = useRoute<RouteProp<MainStackParamsList>>();
  const theme = useTheme();
  const styles = createStyles(theme);

  useEffect(() => {
    dispatch(setSchedule());
  }, [schedule]);

  return (
    <View>
      {schedule.map((day, i) => (
        <View key={i}>
          <View style={styles.dateWrapper}>
            <Text style={styles.date}>{formatDate(day[i].date)}</Text>
            <Text style={styles.day}>
              {t(`days.${getDayOfWeek(day[i].date)}`)}
            </Text>
          </View>
          <View key={i} style={styles.slotsGroup}>
            {day.map((item) => (
              <ScheduleItem item={item} key={item.our_time_id} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};
