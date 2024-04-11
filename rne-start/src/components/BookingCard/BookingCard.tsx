import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { MaterialIcons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import uuid from "react-native-uuid";
import { inputs } from "./config";
import { createStyles } from "./styles";

import { CustomButtonSecondary } from "../CustomButtonSecondary/CustomButtonSecondary";
import { CustomInput } from "../CustomInput/CustomInput";

import { convertPrices, formatDate } from "../../services";
import {
  ISchedule,
  bookingAction,
  getQuestDetails,
  getUserSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { BOOKING_FORM } from "../../constants";
import { BookingFormType } from "../../types";
import { bookingFormScheme } from "../../shared/validationSchemes";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { useState } from "react";
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
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const { firstName, phone, email } = useAppSelector(getUserSelector);
  const uid = uuid.v4("string") as string;
  const { name, location } = useAppSelector(getQuestDetails);
  const { date, time, extraPrices, our_time_id } = slot;
  let md5 = require("md5");

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

  const handleBook = () => {
    // const bookedItem = {
    //   ...getValues(),
    //   datetime: `${date} ${time}`,
    //   price: selectedPrice.price,
    //   our_time_id,
    //   signature: md5(`${date} ${time}:00 . BR`),
    //   source: "BR Application",
    //   uid,
    // };

    const secret = md5(
      getValues().name +
        getValues().phone +
        getValues().email +
        "BlackOrgRoomSecret"
    );

    const bookedItem = {
      ...getValues(),
      id_quest: our_time_id,
      date_quest: date,
      time_quest: time,
      price_quest: selectedPrice.price,
      source: "BR Application",
      quest_id: "2",
      key_input: "BR Application",
      // secret,
    };

    const formData = new URLSearchParams();
    Object.keys(bookedItem).forEach((key) =>
      formData.append(key, bookedItem[key])
    );

    dispatch(
      bookingAction({
        apiPath: "https://blackroom.by/api/my/quests/2/order",
        bookedItem: formData,
      })
    ).then(() => reset());
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
