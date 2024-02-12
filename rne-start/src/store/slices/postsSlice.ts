import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../types";
import { faker } from "@faker-js/faker";

const fake: string[] = new Array(20).fill("");

const initialState: IPost[] = fake.map(() => ({
  id: faker.number.float().toString(),
  title: faker.music.genre(),
  text: faker.lorem.sentence(),
  date: faker.date.month().toString(),
  authorId: faker.number.int().toString(),
  likes: faker.number.int().toString().slice(0, 2),
  views: faker.number.int().toString().slice(0, 3),
}));

const postsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    addPost(state, { payload }: { payload: IPost }) {
      state = [...state, payload];
    },
  },
});

export const {
  reducer: postsReducer,
  actions: { addPost },
} = postsSlice;
