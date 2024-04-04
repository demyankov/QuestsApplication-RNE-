import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilteredCollection } from "../../api";
import { IFbFilter, IReview } from "../../types";

interface getUserReviewsActionProps {
  collectionName: string;
  userId: string;
}

export const getUserReviewsAction = createAsyncThunk<
  IReview[],
  getUserReviewsActionProps
>("Reviews/getUserReviewsAction", async ({ collectionName, userId }) => {
  const filter: IFbFilter[] = [
    {
      field: "userId",
      operator: "==",
      value: userId,
    },
  ];

  const documents = await getFilteredCollection(collectionName, filter);

  return documents;
});
