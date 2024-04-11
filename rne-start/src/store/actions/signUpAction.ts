import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp } from "../../api";

export interface SignUpActionProps {
  email: string;
  password: string;
}

export const signUpAction = createAsyncThunk<void, SignUpActionProps>(
  "User/signUpAction",
  async ({ email, password }) => {
    console.log("click");
    signUp(email, password);
  }
);
