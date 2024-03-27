import { useTheme } from "@react-navigation/native";
import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { ISchedule } from "../../store";
import { createStyles } from "./styles";
import { SLOT_STATUS } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

interface ScheduleItemProps {
  item: ISchedule;
  handleClick: (item: ISchedule) => void;
  disabled?: boolean;
}

export const ScheduleItem = ({
  item,
  handleClick,
  disabled = false,
}: ScheduleItemProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const { time, is_free, extraPrices } = item;

  const gradient = is_free
    ? ["#f8f408", "#dad610", "#999706"]
    : ["transparent", "transparent"];

  return (
    <LinearGradient
      colors={gradient}
      style={[styles.slot, !is_free && styles[SLOT_STATUS.CLOSED]]}
    >
      <TouchableHighlight onPress={() => handleClick(item)} disabled={disabled}>
        <>
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
        </>
      </TouchableHighlight>
    </LinearGradient>
  );
};
