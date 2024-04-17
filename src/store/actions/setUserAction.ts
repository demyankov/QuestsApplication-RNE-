import { createAsyncThunk } from "@reduxjs/toolkit";
import { setDocument } from "../../api";
import { User } from "../types";
import { faker } from "@faker-js/faker";

export interface SetUserActionProps {
  collectionName: string;
  uid: string;
  data: User;
}

export const setUserAction = createAsyncThunk<void, SetUserActionProps>(
  "User/setUserAction",
  async ({ collectionName, uid, data }) =>
    setDocument(collectionName, uid, { ...data, avatar: faker.image.avatar() })
);
