import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCollection } from "../../api";
import { IQuest } from "../../types";

export const getQuestsAction = createAsyncThunk<IQuest[], string>(
  "Quests/getQuestsAction",
  async (collectionName) => getCollection(collectionName)
);
