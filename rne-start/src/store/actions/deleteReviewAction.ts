import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDocumentById } from "../../api";
import { getUserReviewsAction } from "./getUserReviewsAction";
import { getQuestReviewsAction } from "./getQuestReviewsAction";

interface deleteReviewActionProps {
  collectionName: string;
  id: string;
  userId: string;
  questId?: string;
}

export const deleteReviewAction = createAsyncThunk<
  void,
  deleteReviewActionProps
>(
  "Reviews/deleteReviewAction",
  async ({ collectionName, id }) => await deleteDocumentById(collectionName, id)
);
