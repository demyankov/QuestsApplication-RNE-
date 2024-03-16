import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { MaterialIcons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";

import { inputs } from "./config";
import { createStyles } from "./styles";

import { CustomButtonSecondary } from "../CustomButtonSecondary/CustomButtonSecondary";
import { CustomInput } from "../CustomInput/CustomInput";

import { convertPrices, formatDate } from "../../services";
import {
  ISchedule,
  getQuestDetails,
  getUserSelector,
  useAppSelector,
} from "../../store";
import { BOOKING_FORM } from "../../constants";
import { BookingFormType } from "../../types";
import { bookingFormScheme } from "../../shared/validationSchemes";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { useEffect, useState } from "react";
import { IConvertPrice } from "../../services/convertPrices";

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
  const [selectedPrice, setSelectedPrice] = useState<IConvertPrice>({
    price: "0",
    players_num: "",
    option: "",
  });
  const [idsabled, setIsDisabled] = useState(true);

  const { t } = useTranslation();
  const { firstName, phone, email } = useAppSelector(getUserSelector);

  const { name, location } = useAppSelector(getQuestDetails);
  const { date, time, extraPrices, our_time_id } = slot;

  const convertedPrices = convertPrices(extraPrices);
  const prices = convertedPrices.map(({ option }) => option);

  const defaultValues = {
    [BOOKING_FORM.FIRST_NAME]: firstName || "",
    [BOOKING_FORM.EMAIL]: email || "",
    [BOOKING_FORM.PHONE]: phone || "",
    [BOOKING_FORM.TARIFF]: "",
    [BOOKING_FORM.COMMENT]: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm<BookingFormType>({
    defaultValues,
    resolver: yupResolver(bookingFormScheme),
    mode: "onBlur",
  });

  const isDisabled = !isValid ?? !isDirty;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <ScrollView contentContainerStyle={styles.centeredView}>
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
          <Text style={styles.price}>
            Итого к оплате: {selectedPrice.price} руб.
          </Text>
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
            <Controller
              name={BOOKING_FORM.TARIFF}
              control={control}
              render={({ field: { onChange, value } }) => {
                const selectPrice = (option: string) => {
                  onChange(option);
                  const selectedPrice = convertedPrices.find(
                    (item) => item.option === getValues().tariff
                  );
                  selectedPrice && setSelectedPrice(selectedPrice);
                };
                return (
                  <CustomSelect
                    options={prices}
                    onSelect={selectPrice}
                    error={errors[BOOKING_FORM.TARIFF]?.message}
                  />
                );
              }}
            />
            <CustomInput
              key={BOOKING_FORM.COMMENT}
              control={control}
              name={BOOKING_FORM.COMMENT}
              label={t("сomment")}
              numberOfLines={3}
              error={
                errors[BOOKING_FORM.COMMENT] &&
                t(`errors.${errors[BOOKING_FORM.COMMENT]?.message}`)
              }
            />
            <CustomButtonSecondary
              title="Забронировать"
              disabled={isDisabled}
              familyIcon="AntDesign"
              iconName="check"
              iconEnd
              handleClick={handleSubmit(() => {
                console.log("Забронирована игра ", our_time_id);
                console.log(errors);
                reset();
              })}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
