import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocById } from "../../api";
import { IQuestDetails } from "../../types";

interface GetQuestDetailsProps {
  collectionName: string;
  id: string;
}

export const getQuestDetailsAction = createAsyncThunk<
  IQuestDetails,
  GetQuestDetailsProps
>("QuestDetails/getQuestDetailsAction", async ({ collectionName, id }) =>
  getDocById(collectionName, id)
);
