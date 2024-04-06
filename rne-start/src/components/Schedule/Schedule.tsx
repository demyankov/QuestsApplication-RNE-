import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import { ActivityIndicator, Text, View } from "react-native";
import { MainStackParamsList } from "../../types";
import {
  useAppSelector,
  getSchedule,
  useAppDispatch,
  setNextPage,
  setPrevPage,
  changeSchedule,
  clearSchedule,
  ISchedule,
} from "../../store";
import { createStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../services";
import { getDayOfWeek } from "../../services/getDayOfWeek";
import { useEffect, useState } from "react";
import { ScheduleItem } from "../ScheduleItem/ScheduleItem";
import { CustomButton } from "../CustomButton/CustomButton";
import { BookingCard } from "../BookingCard/BookingCard";
import { getScheduleAction } from "../../store/actions/getScheduleAction";

export const Schedule = ({ apiPath }: { apiPath: string }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [activeSlot, setActiveSlot] = useState<ISchedule | null>(null);
  const {
    visibleSchedule,
    currentPage,
    countOfPages,
    isLoaderVisible,
    loadingMessage,
  } = useAppSelector(getSchedule);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { params } = useRoute<RouteProp<MainStackParamsList>>();
  const theme = useTheme();
  const styles = createStyles(theme);

  const prevBtnDisabled = currentPage === 1;
  const nextBtnDisabled = currentPage === countOfPages;

  const showPrevPage = () => {
    dispatch(setPrevPage());
  };

  const showNextPage = () => {
    dispatch(setNextPage());
  };

  const openModal = (slot: ISchedule) => {
    setActiveSlot(slot);
    setIsBookingModalOpen(true);
  };

  const closeModal = () => {
    setActiveSlot(null);
    setIsBookingModalOpen(false);
  };

  useEffect(() => {
    dispatch(getScheduleAction({ apiPath: apiPath }));

    return () => {
      dispatch(clearSchedule());
    };
  }, []);

  useEffect(() => {
    dispatch(changeSchedule());
  }, [currentPage]);

  return (
    <View>
      <Text style={styles.header}>
        Нажмите на желаемое время, чтобы узнать окончательную цену и
        забронировать игру.
      </Text>
      <View style={styles.buttonsWrapper}>
        <CustomButton
          title="previously"
          handleClick={showPrevPage}
          familyIcon="AntDesign"
          iconName="arrowleft"
          iconStart
          disabled={prevBtnDisabled}
        />
        <CustomButton
          title="next"
          handleClick={showNextPage}
          familyIcon="AntDesign"
          iconName="arrowright"
          iconEnd
          disabled={nextBtnDisabled}
        />
      </View>
      {isLoaderVisible && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" color="yellow" />
        </View>
      )}
      {loadingMessage && <Text style={styles.message}>{loadingMessage}</Text>}
      {visibleSchedule?.length > 0 &&
        !isLoaderVisible &&
        visibleSchedule.map((day, i) => (
          <View key={i}>
            <View>
              <View style={styles.dateWrapper}>
                <Text style={styles.date}>{formatDate(day[0].date)}</Text>
                <View>
                  <Text style={styles.day}>
                    {t(`days.${getDayOfWeek(day[0].date)}`)}
                  </Text>
                </View>
              </View>
              <View style={styles.slotsGroup}>
                {day.map((item) => (
                  <ScheduleItem
                    item={item}
                    key={item.our_time_id}
                    handleClick={openModal}
                    disabled={!item.is_free}
                  />
                ))}
              </View>
            </View>
            {activeSlot && (
              <BookingCard
                slot={activeSlot}
                visible={isBookingModalOpen}
                handleClose={closeModal}
              />
            )}
          </View>
        ))}
    </View>
  );
};
