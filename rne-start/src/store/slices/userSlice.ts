import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";
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
    avatar: "",
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
      state.isAuth = false;
    },
    setUser(state, { payload }: { payload: User }) {
      state.user = payload;
      if (state.user.id) {
        state.isAuth = true;
      }
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
        state.isAuth = false;
        state.errorMessage = "";
      })
      .addCase(signUpAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.errorMessage = error.message || "Ошибка регистрации";
        state.isAuth = false;
      })
      .addCase(signInAction.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(signInAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        console.log(payload);
        state.errorMessage = "";
        state.isAuth = true;
      })
      .addCase(signInAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.errorMessage = error.message || "Ошибка авторизации";
        state.isAuth = false;
      });
  },
});

export const {
  reducer: userReducer,
  actions: { updateProfileSettings, clearUser, setUser },
} = userSlice;
