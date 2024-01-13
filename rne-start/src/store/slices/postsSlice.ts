import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../types";

const initialState: Post[] = [
  {
    id: "001",
    text: "Первый пост",
    authorId: "007",
  },
];

const postsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    addPost(state, { payload }: { payload: Post }) {
      state = [...state, payload];
    },
  },
});

export const {
  reducer: postsReducer,
  actions: { addPost },
} = postsSlice;
