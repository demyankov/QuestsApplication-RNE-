import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { id: "initial" };

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
