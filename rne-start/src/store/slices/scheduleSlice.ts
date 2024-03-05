import { createSlice } from "@reduxjs/toolkit";
import { bookingMock } from "../../constants/bookingMock";
import { ISchedule } from "../types";
import { formatScheduleData } from "../../services";

const daysPerPage = 4;

const initialState: IScheduleSlice = {
  schedule: [],
  visibleSchedule: [],
  currentPage: 1,
  countOfPages: 1,
};

interface IScheduleSlice {
  schedule: ISchedule[][];
  visibleSchedule: ISchedule[][];
  currentPage: number;
  countOfPages: number;
}

const scheduleSlice = createSlice({
  name: "Schedule",
  initialState,
  reducers: {
    setSchedule(state) {
      state.schedule = formatScheduleData(bookingMock);
      state.countOfPages = Math.ceil(state.schedule.length / daysPerPage);
    },
    changeSchedule(state) {
      // ПРИВОДИМ ДАННЫЕ В ТРЕБУЕМЫЙ ВИД
      const start = (state.currentPage - 1) * daysPerPage;
      const end = Math.min(
        state.currentPage * daysPerPage,
        state.schedule.length
      );
      state.visibleSchedule = state.schedule.slice(start, end);
    },
    setNextPage(state) {
      if (state.currentPage < state.countOfPages) {
        state.currentPage += 1;
      }
    },
    setPrevPage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    clearSchedule(state) {
      state.schedule = [];
      state.visibleSchedule = [];
      state.currentPage = 1;
      state.countOfPages = 1;
    },
  },
});

export const {
  reducer: scheduleReducer,
  actions: {
    setSchedule,
    changeSchedule,
    setNextPage,
    setPrevPage,
    clearSchedule,
  },
} = scheduleSlice;
