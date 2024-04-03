import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocByName } from "../../api";

interface getReviewsActionProps {
  collectionName: string;
  questId: string;
}

export const getReviewsAction = createAsyncThunk<
  string[],
  getReviewsActionProps
>("Reviews/getReviewsAction", async ({ collectionName, questId }) => {
  const document = await getDocByName(collectionName, questId);

  return document.id;
});
