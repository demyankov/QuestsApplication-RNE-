import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { ToastOptions, useToast } from "react-native-toast-notifications";

import { defaultPrice, inputs } from "./config";
import { createStyles } from "./styles";

import { CustomButtonSecondary } from "../CustomButtonSecondary/CustomButtonSecondary";
import { CustomInput } from "../CustomInput/CustomInput";
import { Loader } from "../Loader/Loader";

import { convertPrices, formatDate } from "../../services";
import {
  ISchedule,
  bookingAction,
  getBookingErrorMessageSelector,
  getBookingSuccessMessageSelector,
  getIsBookingLoadingSelector,
  getQuestDetails,
  getScheduleAction,
  getUserSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { BOOKING_FORM } from "../../constants";
import { BookingFormType } from "../../types";
import { bookingFormScheme } from "../../shared/validationSchemes";
import { CustomSelect } from "../CustomSelect/CustomSelect";
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
  const { t } = useTranslation();
  const [selectedPrice, setSelectedPrice] =
    useState<IConvertPrice>(defaultPrice);

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsBookingLoadingSelector);
  const { firstName, phone, email } = useAppSelector(getUserSelector);
  const { name, location, id, bookingApiPath, apiPath } =
    useAppSelector(getQuestDetails);
  const errorMessage = useAppSelector(getBookingErrorMessageSelector);
  const successMessage = useAppSelector(getBookingSuccessMessageSelector);

  const toast = useToast();

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

  const showMessage = (text: string, type: ToastOptions["type"]) =>
    toast.show(t(text), {
      type: type,
      placement: "top",
      animationType: "slide-in",
      icon:
        type === "success" ? (
          <FontAwesome6 name="face-smile-wink" size={24} color="#fff" />
        ) : (
          <FontAwesome name="hand-stop-o" size={24} color="#fff" />
        ),
    });

  const isDisabled = !isValid && !isDirty && !isLoading;

  const handleBook = async () => {
    const bookedItem = {
      ...getValues(),
      id_quest: our_time_id,
      date_quest: date,
      time_quest: time,
      price_quest: getValues()[BOOKING_FORM.TARIFF],
      source: "BR Application",
      quest_id: id,
      key_input: "BR Application",
    };

    try {
      await dispatch(
        bookingAction({
          apiPath: bookingApiPath,
          bookedItem: bookedItem,
        })
      );
      showMessage(successMessage || "Квест успешно забронирован", "success");
      handleClose();
      reset();
      dispatch(getScheduleAction({ apiPath }));
    } catch {
      showMessage(errorMessage || "Ошибка бронирования", "danger");
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <ScrollView contentContainerStyle={styles.centeredView}>
        <View style={[styles.card, styles.cardShadow]}>
          {isLoading && <Loader />}
          <View style={styles.header}>
            <Text style={styles.title}>{t("booking")}</Text>
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
            {t("summary")}: {selectedPrice.price} {t("rub")}.
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
              render={({ field: { onChange } }) => {
                const selectPrice = (option: string) => {
                  onChange(option);
                  const selectedPrice = convertedPrices.find(
                    (item) => item.option === getValues()[BOOKING_FORM.TARIFF]
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
              label={"сomment"}
              numberOfLines={3}
              error={
                errors[BOOKING_FORM.COMMENT] &&
                t(`errors.${errors[BOOKING_FORM.COMMENT]?.message}`)
              }
            />
            <CustomButtonSecondary
              title="buttons.book"
              disabled={isDisabled}
              familyIcon="AntDesign"
              iconName="check"
              iconEnd
              handleClick={handleSubmit(handleBook)}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
