import { useTheme } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { ISchedule } from "../../store";
import { createStyles } from "./styles";
import { SLOT_STATUS } from "../../constants";

export const ScheduleItem = ({ item }: { item: ISchedule }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const { time, is_free, extraPrices } = item;

  return (
    <Pressable style={[styles.slot, !is_free && styles[SLOT_STATUS.CLOSED]]}>
      <Text style={[styles.time, !is_free && styles[SLOT_STATUS.CLOSED]]}>
        {time}
      </Text>
      <Text
        style={[styles.description, !is_free && styles[SLOT_STATUS.CLOSED]]}
      >
        {is_free
          ? `от ${Math.min(Number(...Object.values(extraPrices)))} руб.`
          : "закрыто"}
      </Text>
    </Pressable>
  );
};
