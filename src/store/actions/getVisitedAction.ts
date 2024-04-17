import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocByName } from "../../api";

interface getVisitedActionProps {
  collectionName: string;
  docName: string;
}

export const getVisitedAction = createAsyncThunk<
  string[],
  getVisitedActionProps
>("Visited/getVisitedAction", async ({ collectionName, docName }) => {
  const document = await getDocByName(collectionName, docName);

  return document.id;
});
