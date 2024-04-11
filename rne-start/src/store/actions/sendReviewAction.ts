import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDocument } from "../../api";
import { getQuestReviewsAction } from "./getQuestReviewsAction";
import { IReview } from "../../types";

interface sendReviewActionProps {
  collectionName: string;
  review: IReview;
}

export const sendReviewAction = createAsyncThunk<void, sendReviewActionProps>(
  "Reviews/sendReviewAction",
  async ({ collectionName, review }, { dispatch }) => {
    await addDocument(collectionName, review);
    await dispatch(
      getQuestReviewsAction({
        collectionName: "reviews",
        questId: review.questId,
      })
    );
  }
);
