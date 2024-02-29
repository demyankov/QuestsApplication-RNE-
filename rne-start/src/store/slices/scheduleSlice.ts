import { createSlice } from "@reduxjs/toolkit";
import { bookingMock } from "../../constants/bookingMock";
import { ISchedule } from "../types";
import { formatScheduleData } from "../../services";

const initialState: ISchedule[][] = formatScheduleData(bookingMock);

const scheduleSlice = createSlice({
  name: "Schedule",
  initialState,
  reducers: {
    setSchedule(state) {
      // ПРИВОДИМ ДАННЫЕ В ТРЕБУЕМЫЙ ВИД
      state = formatScheduleData(bookingMock);
    },
  },
});

export const {
  reducer: scheduleReducer,
  actions: { setSchedule },
} = scheduleSlice;
