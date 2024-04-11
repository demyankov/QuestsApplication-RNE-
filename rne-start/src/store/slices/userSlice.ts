import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";
import { faker } from "@faker-js/faker";
import { SettingProfileType } from "../../types";
import { signUpAction } from "..";

interface IUserSlice {
  isAuth: boolean;
  user: User;
  isLoading: boolean;
  errorMessage: string;
  successMessage: string;
}

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
  // extraReducers(builder) {
  //   builder
  //     .addCase(signUpAction.pending, (state, action) => {
  //       // state.isLoaderVisible = true;
  //       // state.loadingMessage = "";
  //     })
  //     .addCase(signUpAction.fulfilled, (state, { payload }) => {
  //       // state.isLoaderVisible = false;
  //     })
  //     .addCase(signUpAction.rejected, (state, { error }) => {
  //       // state.isLoaderVisible = false;
  //       // state.loadingMessage = error.message || "Ошибка запроса";
  //     });
  // },
});

export const {
  reducer: userReducer,
  actions: { updateProfileSettings },
} = userSlice;
