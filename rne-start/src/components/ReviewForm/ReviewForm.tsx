import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import uuid from "react-native-uuid";

import { createStyles } from "./styles";
import {
  User,
  getQuestReviewsAction,
  sendReviewAction,
  useAppDispatch,
} from "../../store";
import { IQuest, IReview, ReviewFormType } from "../../types";
import { reviewFormScheme } from "../../shared/validationSchemes";
import { useState } from "react";
import { REVIEW_FORM } from "../../constants";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { CustomInput } from "../CustomInput/CustomInput";
import { CustomButton } from "../CustomButton/CustomButton";
import { configureUserName, isFuture, isOld } from "../../services";
import { RateQuest } from "../RateQuest/RateQuest";
import { useToast } from "react-native-toast-notifications";
import { FontAwesome6 } from "@expo/vector-icons";

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
  const dispatch = useAppDispatch();
  const toast = useToast();
  const theme = useTheme();
  const styles = createStyles(theme);
  const [date, setDate] = useState(new Date());
  const [datePickerShow, setDatePickerShow] = useState(false);
  const [rate, setRate] = useState(0);
  const { t } = useTranslation();
  const { firstName, secondName, id: userId } = user;
  const { name: questName, id: questId } = quest;

  const defaultValues = {
    [REVIEW_FORM.COMMENT]: "",
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

  const toggleDatePickerShow = () => {
    setDatePickerShow(!datePickerShow);
  };

  const onChangeDate = (e: DateTimePickerEvent) => {
    toggleDatePickerShow();
    const selectedDate = new Date(e.nativeEvent.timestamp);
    setDate(selectedDate);
  };

  const handleSendReview = async () => {
    const userName = configureUserName(firstName, secondName);
    const dateOfReview = new Date().toLocaleDateString();
    const dateOfGame = date.toLocaleDateString();
    const reviewText = getValues().comment;
    const id = uuid.v4("string") as string;
    const review: IReview = {
      id,
      userId,
      userName,
      questId,
      questName,
      dateOfReview,
      dateOfGame,
      reviewText,
      rate,
    };
    try {
      await dispatch(
        sendReviewAction({ collectionName: "reviews", doc: review })
      );
      handleClose();
      reset();
      await dispatch(
        getQuestReviewsAction({ collectionName: "reviews", questId })
      );

      toast.show(t("sendReviewSuccessfully"), {
        type: "success",
        placement: "top",
        animationType: "slide-in",
        icon: <FontAwesome6 name="face-smile-wink" size={24} color="#fff" />,
      });
    } catch (e) {
      alert(e);
    }
  };

  const isDisabled = !rate || !isValid || !isDirty;
  let isWrongDate = isFuture(date);
  let isOldGame = isOld(date);

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
            <Text style={styles.title}>{t("leaveReviewFor")}</Text>
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
            <Text style={styles.text}>{t("selectDate")}</Text>
            <View style={styles.dateWrapper}>
              <CustomButton
                title={date.toLocaleDateString()}
                handleClick={toggleDatePickerShow}
              />
              {isWrongDate && (
                <Text style={styles.wrongDate}>{t("futureDate")}</Text>
              )}
              {isOldGame && (
                <Text style={styles.wrongDate}>{t("oldDate")}</Text>
              )}
            </View>
            <RateQuest rate={rate} handleRate={setRate} />
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
              handleClick={handleSubmit(handleSendReview)}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
