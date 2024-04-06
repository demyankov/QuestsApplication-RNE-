import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDocumentById, getFilteredCollection } from "../../api";
import { IFbFilter, IReview } from "../../types";
import { getUserReviewsAction } from "./getUserReviewsAction";

interface deleteReviewActionProps {
  collectionName: string;
  id: string;
  userId;
}

export const deleteReviewAction = createAsyncThunk<
  void,
  deleteReviewActionProps
>(
  "Reviews/deleteReviewAction",
  async ({ collectionName, id, userId }, { dispatch }) => {
    await deleteDocumentById(collectionName, id);

    //ДОДЕЛАТЬ НОРМАЛЬНО УДАЛЕНИЕ ()ОБНОВЛЕНИЕ ПОСЛЕ УДАЛЕНИЯ
    await dispatch(getUserReviewsAction({ collectionName: "reviews", userId }));
  }
);
