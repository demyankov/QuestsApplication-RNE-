import { useTheme } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { ISchedule } from "../../store";
import { createStyles } from "./styles";
import { SLOT_STATUS } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const { time, is_free, extraPrices } = item;

  const gradient = is_free
    ? ["#f8f408", "#dad610", "#999706"]
    : ["transparent", "transparent"];

  return (
    <LinearGradient
      colors={gradient}
      style={[
        styles.slot,
        !is_free ? styles[SLOT_STATUS.CLOSED] : styles.shadow,
      ]}
    >
      <Pressable onPress={() => handleClick(item)} disabled={disabled}>
        <>
          <Text style={[styles.time, !is_free && styles[SLOT_STATUS.CLOSED]]}>
            {time}
          </Text>
          <Text
            style={[styles.description, !is_free && styles[SLOT_STATUS.CLOSED]]}
          >
            {is_free
              ? `${t("from")} ${Math.min(
                  Number(...Object.values(extraPrices))
                )} ${t("rub")}.`
              : t("closed")}
          </Text>
        </>
      </Pressable>
    </LinearGradient>
  );
};
