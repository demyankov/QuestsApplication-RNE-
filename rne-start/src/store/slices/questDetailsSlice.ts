import { createSlice } from "@reduxjs/toolkit";
import { questPageMock } from "../../constants/questPageMock";

const initialState: any = {
  currentQuest: {},
  isLoading: true,
};
const questDetailsSlice = createSlice({
  name: "QuestDetails",
  initialState,
  reducers: {
    setCurrentQuest(state, { payload }: { payload: string }) {
      state.currentQuest = questPageMock.find(({ id }) => id === payload);
    },
    clearCurrentQuest(state) {
      state.currentQuest = {};
    },
  },
});

export const {
  reducer: questDetailsReducer,
  actions: { setCurrentQuest, clearCurrentQuest },
} = questDetailsSlice;
