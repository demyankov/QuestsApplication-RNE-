import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDocument } from "../../api";

interface sendReviewActionProps {
  collectionName: string;
  doc: unknown;
}

export const sendReviewAction = createAsyncThunk<void, sendReviewActionProps>(
  "Reviews/sendReviewAction",
  async ({ collectionName, doc }) => addDocument(collectionName, doc)
);
