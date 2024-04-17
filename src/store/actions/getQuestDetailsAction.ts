import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocById } from "../../api";
import { IQuest } from "../../types";

interface GetQuestDetailsProps {
  collectionName: string;
  id: string;
}

export const getQuestDetailsAction = createAsyncThunk<
  IQuest,
  GetQuestDetailsProps
>("QuestDetails/getQuestDetailsAction", async ({ collectionName, id }) =>
  getDocById(collectionName, id)
);
