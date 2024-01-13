import { createSlice } from "@reduxjs/toolkit";
import { Follower } from "../types";

const initialState: Follower[] = [
  {
    id: "007",
    firstName: "Аркадий",
    secondName: "Петушков",
    nickName: "arkasha89",
    age: "35",
    link: "",
  },
];

const followersSlice = createSlice({
  name: "Subscribers",
  initialState,
  reducers: {
    addFollower(state, { payload }: { payload: Follower }) {
      state = [...state, payload];
    },
  },
});

export const {
  reducer: followersReducer,
  actions: { addFollower },
} = followersSlice;
