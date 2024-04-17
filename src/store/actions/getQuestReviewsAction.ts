import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilteredCollection } from "../../api";
import { IFbFilter, IReview } from "../../types";

interface getQuestReviewsActionProps {
  collectionName: string;
  questId: string;
}

export const getQuestReviewsAction = createAsyncThunk<
  IReview[],
  getQuestReviewsActionProps
>("Reviews/getQuestReviewsAction", async ({ collectionName, questId }) => {
  const filter: IFbFilter[] = [
    {
      field: "questId",
      operator: "==",
      value: questId,
    },
  ];

  const documents = await getFilteredCollection(collectionName, filter);

  return documents;
});
