import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocByName } from "../../api";

interface getFavoritesActionProps {
  collectionName: string;
  docName: string;
}

export const getFavoritesAction = createAsyncThunk<
  string[],
  getFavoritesActionProps
>("Favorites/getFavoritesAction", async ({ collectionName, docName }) => {
  const document = await getDocByName(collectionName, docName);

  return document.id;
});
