import { createSlice } from "@reduxjs/toolkit";
import { questPageMock } from "../../constants/questPageMock";

const initialState: any = questPageMock;

const postsSlice = createSlice({
  name: "QuestDetails",
  initialState,
  reducers: {
    setCurrentQuest(state, { payload }: { payload: any }) {
      state = payload;
    },
  },
});

export const {
  reducer: questDetailsReducer,
  actions: { setCurrentQuest },
} = postsSlice;
