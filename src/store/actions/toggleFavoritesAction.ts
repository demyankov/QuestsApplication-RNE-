import { createAsyncThunk } from "@reduxjs/toolkit";
import { toggleArray } from "../../api";
import { getFavoritesAction } from "./getFavoritesAction";

interface getFavoritesActionProps {
  collectionName: string;
  docName: string;
  id: string;
  isInclude: boolean;
}

export const toggleFavoritesAction = createAsyncThunk<
  void,
  getFavoritesActionProps
>(
  "Favorites/toggleFavoritesAction",
  ({ collectionName, docName, id, isInclude }, { dispatch }) => {
    toggleArray(collectionName, docName, id, isInclude).then(() =>
      dispatch(getFavoritesAction({ collectionName: "favorites", docName }))
    );
  }
);
