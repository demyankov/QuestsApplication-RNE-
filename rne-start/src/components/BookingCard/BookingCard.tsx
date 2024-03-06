import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import {
  ISchedule,
  getQuestDetails,
  getUserSelector,
  useAppSelector,
} from "../../store";
import { formatDate } from "../../services";
import { CustomInput } from "../CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import { BOOKING_FORM } from "../../constants";
import { BookingFormType } from "../../types";
import { bookingFormScheme } from "../../shared/validationSchemes";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputs } from "./config";
import { MaterialIcons } from "@expo/vector-icons";
import { createStyles } from "./styles";

interface BookingCardProps {
  slot: ISchedule;
  visible: boolean;
  handleClose: () => void;
}

export const BookingCard = ({
  slot,
  visible = false,
  handleClose,
}: BookingCardProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();
  const { firstName, phone, email } = useAppSelector(getUserSelector);

  const { name, location } = useAppSelector(getQuestDetails);
  const { date, time, is_free, extraPrices, our_time_id } = slot;

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<BookingFormType>({
    defaultValues: {
      [BOOKING_FORM.FIRST_NAME]: firstName || "",
      [BOOKING_FORM.EMAIL]: email || "",
      [BOOKING_FORM.PHONE]: phone || "",
      [BOOKING_FORM.COUNT_OF_GAMERS]: "",
      [BOOKING_FORM.COMMENT]: "",
    },
    resolver: yupResolver(bookingFormScheme),
    mode: "onBlur",
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <View style={styles.centeredView}>
        <View style={[styles.card, styles.cardShadow]}>
          <View style={styles.header}>
            <Text style={styles.title}>Бронирование квеста</Text>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.dateWrapper}>
              <Text style={styles.date}>{formatDate(date)}</Text>
              <Text style={styles.date}>{time}</Text>
            </View>
            <Text style={styles.address}>{location}</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
              <MaterialIcons name="close" size={34} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>Итого к оплате: СУММА!!!!</Text>
          <View style={styles.form}>
            {inputs.map(({ name, label }) => {
              let errorMessage = errors[name]?.message;
              return (
                <CustomInput
                  key={name}
                  control={control}
                  name={name}
                  label={t(label)}
                  error={errorMessage && t(`errors.${errors[name]?.message}`)}
                />
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};
