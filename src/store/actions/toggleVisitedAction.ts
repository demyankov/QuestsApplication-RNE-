import { createAsyncThunk } from "@reduxjs/toolkit";
import { toggleArray } from "../../api";
import { getVisitedAction } from "./getVisitedAction";

interface getVisitedActionProps {
  collectionName: string;
  docName: string;
  id: string;
  isInclude: boolean;
}

export const toggleVisitedAction = createAsyncThunk<
  void,
  getVisitedActionProps
>(
  "Visited/toggleVisitedAction",
  ({ collectionName, docName, id, isInclude }, { dispatch }) => {
    toggleArray(collectionName, docName, id, isInclude).then(() =>
      dispatch(getVisitedAction({ collectionName: "visited", docName }))
    );
  }
);
