import { createSlice } from "@reduxjs/toolkit";
import { getQuestDetailsAction } from "../actions";
import { IQuest } from "../../types";

interface IQuestDetailsSlice {
  currentQuest: IQuest;
  isLoading: boolean;
  loadingMessage: string;
}

const initialQuest = {
  id: "",
  apiPath: "",
  bookingApiPath: "",
  name: "",
  mainGenre: "",
  genres: [],
  location: "",
  banner: "",
  levelOfFear: "",
  difficultyLevel: "",
  contactLevel: "",
  teamSize: "",
  ageFrom: "",
  duration: "",
  interactive: false,
  description: [],
  shortDescription: "",
  additionalDescription: [],
  modes: [],
  isActive: true,
};

const initialState: IQuestDetailsSlice = {
  currentQuest: initialQuest,
  isLoading: true,
  loadingMessage: "",
};

const questDetailsSlice = createSlice({
  name: "QuestDetails",
  initialState,
  reducers: {
    clearCurrentQuest(state) {
      state.currentQuest = initialQuest;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getQuestDetailsAction.pending, (state, action) => {
        state.loadingMessage = "";
        state.isLoading = true;
      })
      .addCase(getQuestDetailsAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (!payload) {
          state.loadingMessage = "Информация о выбранном квесте отсутствует";
        }
        state.currentQuest = payload;
      })
      .addCase(getQuestDetailsAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.loadingMessage = error.message || "Ошибка запроса";
      });
  },
});

export const {
  reducer: questDetailsReducer,
  actions: { clearCurrentQuest },
} = questDetailsSlice;
