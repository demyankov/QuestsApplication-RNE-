import { createAsyncThunk } from "@reduxjs/toolkit";
import { setDocument } from "../../api";

export interface SetUserActionProps {
  collectionName: string;
  uid: string;
  data: unknown;
}

export const setUserAction = createAsyncThunk<void, SetUserActionProps>(
  "User/setUserAction",
  async ({ collectionName, uid, data }) =>
    setDocument(collectionName, uid, data)
);
