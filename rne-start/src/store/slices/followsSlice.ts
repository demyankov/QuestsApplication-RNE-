import { createSlice } from "@reduxjs/toolkit";
import { Follow } from "../types";

const initialState: Follow[] = [
  {
    id: "001",
    firstName: "Геннадий",
    secondName: "Бабушкин",
    nickName: "gena89",
    age: "35",
    link: "",
  },
];

const followsSlice = createSlice({
  name: "Follows",
  initialState,
  reducers: {
    addFollow(state, { payload }: { payload: Follow }) {
      state = [...state, payload];
    },
  },
});

export const {
  reducer: followsReducer,
  actions: { addFollow },
} = followsSlice;
