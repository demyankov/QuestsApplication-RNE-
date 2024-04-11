import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";
import { faker } from "@faker-js/faker";
import { SettingProfileType } from "../../types";
import { signUpAction, signInAction } from "../actions";

interface IUserSlice {
  isAuth: boolean;
  user: User;
  isLoading: boolean;
  isAuthChangedLoading: boolean;
  errorMessage: string;
  successMessage: string;
}

const initialState: IUserSlice = {
  isAuth: false,
  user: {
    id: "",
    firstName: "",
    secondName: "",
    age: "",
    email: "",
    avatar: faker.image.avatar(),
    phone: "",
    location: "",
  },
  isLoading: false,
  isAuthChangedLoading: false,
  errorMessage: "",
  successMessage: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateProfileSettings(state, { payload }: { payload: SettingProfileType }) {
      state.user = { ...state.user, ...payload };
    },
    clearUser(state) {
      state.user = initialState.user;
    },
    setUser(state, { payload }: { payload: User }) {
      state.user = payload;
      if (state.user.id) {
        state.isAuth = true;
      }
      console.log("UserSlise", payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUpAction.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(signUpAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signUpAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.errorMessage = error.message || "Ошибка регистрации";
      })
      .addCase(signInAction.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(signInAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isAuth = true;
        console.log(payload);
      })
      .addCase(signInAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.errorMessage = error.message || "Ошибка авторизации";
      });
  },
});

export const {
  reducer: userReducer,
  actions: { updateProfileSettings, clearUser, setUser },
} = userSlice;
