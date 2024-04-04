import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { createStyles } from "./styles";
import { User } from "../../store";
import { IQuest, ReviewFormType } from "../../types";
import { reviewFormScheme } from "../../shared/validationSchemes";
import { useState } from "react";
import { REVIEW_FORM } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CustomInput } from "../CustomInput/CustomInput";
import { CustomButton } from "../CustomButton/CustomButton";
import { Entypo } from "@expo/vector-icons";
import { getRateArray, isFuture, isOld } from "../../services";
import { scaleSize } from "../../utils";

interface ReviewFormProps {
  user: User;
  quest: IQuest;
  visible: boolean;
  handleClose: () => void;
}

export const ReviewForm = ({
  user,
  quest,
  visible,
  handleClose,
}: ReviewFormProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [date, setDate] = useState(new Date());
  const [datePickerShow, setDatePickerShow] = useState(false);
  const [rate, setRate] = useState(0);

  let isWrongDate = isFuture(date);
  let isOldGame = isOld(date);

  const { t } = useTranslation();
  const { firstName, secondName, id: userId } = user;
  const { name: questName, id: questId } = quest;

  const defaultValues = {
    [REVIEW_FORM.RATE]: "",
    [REVIEW_FORM.COMMENT]: "",
  };

  const toggleDatePickerShow = () => setDatePickerShow(!datePickerShow);

  const onChangeDate = (date) => {
    const selectedDate = new Date(date.nativeEvent.timestamp);
    setDate(selectedDate);
    toggleDatePickerShow();
  };

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm<ReviewFormType>({
    defaultValues,
    resolver: yupResolver(reviewFormScheme),
    mode: "onBlur",
  });

  const rateArray = getRateArray(rate);
  const isDisabled = !rate || !isValid || !isDirty;

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
            <Text style={styles.title}>Оставить отзыв на квест</Text>
            <Text style={styles.name}>{questName}</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
              <MaterialIcons name="close" size={34} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            {datePickerShow && (
              <DateTimePicker
                style={{ flex: 1 }}
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="spinner"
                themeVariant="dark"
                onChange={onChangeDate}
              />
            )}
            <Text style={styles.text}>Выберите дату игры</Text>
            <View style={styles.dateWrapper}>
              <CustomButton
                title={date.toLocaleDateString()}
                handleClick={toggleDatePickerShow}
              />
              {isWrongDate && (
                <Text style={styles.wrongDate}>Вы прилетели из будущего?</Text>
              )}
              {isOldGame && (
                <Text style={styles.wrongDate}>Прошло более 180 дней</Text>
              )}
            </View>
            <Text style={styles.text}>Оцените игру</Text>
            <View style={styles.rateWrapper}>
              {rateArray.map((star, i) =>
                star ? (
                  <Pressable key={i}>
                    <Entypo
                      name="star"
                      size={scaleSize(60)}
                      color="yellow"
                      onPress={() => setRate(i + 1)}
                    />
                  </Pressable>
                ) : (
                  <Pressable key={i}>
                    <Entypo
                      name="star-outlined"
                      size={scaleSize(60)}
                      color={theme.colors.text}
                      onPress={() => setRate(i + 1)}
                    />
                  </Pressable>
                )
              )}
            </View>
            <CustomInput
              key={REVIEW_FORM.COMMENT}
              control={control}
              name={REVIEW_FORM.COMMENT}
              label={t("сomment")}
              numberOfLines={8}
              error={
                errors[REVIEW_FORM.COMMENT] &&
                t(`errors.${errors[REVIEW_FORM.COMMENT]?.message}`)
              }
            />
            <CustomButton
              title="leaveReview"
              disabled={isDisabled}
              familyIcon="MaterialIcons"
              iconName="reviews"
              iconEnd
              handleClick={handleSubmit(() => {
                reset();
              })}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
