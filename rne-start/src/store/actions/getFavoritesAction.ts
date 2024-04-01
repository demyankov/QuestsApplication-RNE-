import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCollection } from "../../api";

export const getFavoritesAction = createAsyncThunk<string[], string>(
  "Favorites/getFavoritesAction",
  async (collectionName) => getCollection(collectionName)
);
