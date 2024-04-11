import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn } from "../../api";
import { User } from "../types";

export interface SignInActionProps {
  email: string;
  password: string;
}

export const signInAction = createAsyncThunk<User, SignInActionProps>(
  "User/signInAction",
  async ({ email, password }) => signIn(email, password)
);
