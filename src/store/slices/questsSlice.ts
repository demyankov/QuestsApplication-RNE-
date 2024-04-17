import { createSlice } from "@reduxjs/toolkit";
import { IQuest } from "../../types";
import { getQuestsAction } from "../actions";

interface IQuestsSlice {
  quests: IQuest[];
  activeQuests: IQuest[];
  isLoading: boolean;
  loadingMessage: string;
}

const initial = [];

const initialState: IQuestsSlice = {
  quests: [],
  activeQuests: [],
  isLoading: true,
  loadingMessage: "",
};

const questsSlice = createSlice({
  name: "Quests",
  initialState,
  reducers: {
    clearQuests(state) {
      state.quests = initial;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getQuestsAction.pending, (state, action) => {
        state.loadingMessage = "";
        state.isLoading = true;
      })
      .addCase(getQuestsAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.loadingMessage = "Информация о выбранном квесте отсутствует";
        }
        state.quests = payload.sort(() => Math.random() - 0.5);
        state.activeQuests = state.quests.filter(({ isActive }) => isActive);
      })
      .addCase(getQuestsAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.loadingMessage = error.message || "Ошибка запроса";
      });
  },
});

export const {
  reducer: questsReducer,
  actions: { clearQuests },
} = questsSlice;
