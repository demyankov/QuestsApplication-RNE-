import { createSlice } from "@reduxjs/toolkit";
import { getQuestDetailsAction } from "../actions";
import { IQuestDetails } from "../../types";
import { boolean } from "yup";

interface IQuestDetailsSlice {
  currentQuest: IQuestDetails;
  isLoading: boolean;
  loadingMessage: string;
}

const initialQuest = {
  id: "",
  apiPath: "",
  name: "",
  mainGenre: "",
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
  additionalDescription: [],
  modes: [],
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
        if (payload) {
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
