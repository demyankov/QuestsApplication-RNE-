import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";
import { faker } from "@faker-js/faker";
import { SettingProfileType } from "../../types";

const initialState: User = {
  id: "001",
  isAuth: true,
  firstName: "Геннадий",
  secondName: "Бабушкин",
  age: "9",
  email: "daa@mail.ru",
  avatar: faker.image.avatar(),
  phone: "",
  location: "Беларусь",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateProfileSettings(state, { payload }: { payload: SettingProfileType }) {
      state.firstName = payload.firstName;
      state.secondName = payload.secondName;
      state.age = payload.age;
      state.email = payload.email || "";
      state.phone = payload.phone || "";
      state.location = payload.location;
    },
  },
});

export const {
  reducer: userReducer,
  actions: { updateProfileSettings },
} = userSlice;
