import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";
import { faker } from "@faker-js/faker";

const initialState: User = {
  id: "001",
  isAuth: true,
  firstName: "Геннадий",
  secondName: "Бабушкин",
  age: "9",
  avatar: faker.image.avatar(),
  location: "Беларусь",
  countOfFollowers: "45",
  countOfFollows: "32",
  countOfPosts: "18",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    changeUserName(state, { payload }: { payload: string }) {
      state.firstName = payload;
    },
  },
});

export const {
  reducer: userReducer,
  actions: { changeUserName },
} = userSlice;
