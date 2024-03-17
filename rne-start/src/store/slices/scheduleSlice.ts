import { createSlice } from "@reduxjs/toolkit";
import { ISchedule } from "../types";
import { formatScheduleData } from "../../services";
import { getScheduleAction } from "../actions/getScheduleAction";

const daysPerPage = 4;

interface IScheduleSlice {
  schedule: ISchedule[][];
  visibleSchedule: ISchedule[][];
  currentPage: number;
  countOfPages: number;
  isLoaderVisible: boolean;
  loadingMessage: string;
}

const initialState: IScheduleSlice = {
  schedule: [],
  visibleSchedule: [],
  currentPage: 1,
  countOfPages: 1,
  isLoaderVisible: true,
  loadingMessage: "",
};

const scheduleSlice = createSlice({
  name: "Schedule",
  initialState,
  reducers: {
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
  extraReducers(builder) {
    builder
      .addCase(getScheduleAction.pending, (state, action) => {
        state.isLoaderVisible = true;
        state.loadingMessage = "";
      })
      .addCase(getScheduleAction.fulfilled, (state, { payload }) => {
        state.isLoaderVisible = false;
        if (payload.length === 0) {
          state.loadingMessage = "Расписание отсутствует";
        }
        state.schedule = formatScheduleData(payload);
        state.countOfPages = Math.ceil(state.schedule.length / daysPerPage);
        state.visibleSchedule = state.schedule.slice(0, daysPerPage);
      })
      .addCase(getScheduleAction.rejected, (state, { error }) => {
        state.isLoaderVisible = false;
        state.loadingMessage = error.message || "Ошибка запроса";
      });
  },
});

export const {
  reducer: scheduleReducer,
  actions: { changeSchedule, setNextPage, setPrevPage, clearSchedule },
} = scheduleSlice;
