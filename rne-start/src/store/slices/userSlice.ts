import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: User = {
  id: "001",
  isAuth: true,
  name: "Фёдор",
  age: "33",
  location: "Беларусь",
  countOfFollowers: "45",
  countOfFollows: "32",
  countOfPosts: "18",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    aaa() {},
  },
});

export const {
  reducer: userReducer,
  actions: { aaa },
} = userSlice;
