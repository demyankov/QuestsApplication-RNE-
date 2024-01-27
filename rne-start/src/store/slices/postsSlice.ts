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

// const initialState: IPost[] = [
//   {
//     id: "001",
//     title: "Пост 1",
//     text: "Первый пост, который я оставил",
//     date: "20.01.2024",
//     authorId: "007",
//     likes: "150",
//     views: "1405",
//   },
//   {
//     id: "002",
//     title: "Пост 2",
//     text: "Второй пост, который я оставил",
//     date: "21.01.2024",
//     authorId: "007",
//     likes: "122",
//     views: "1145",
//   },
//   {
//     id: "003",
//     title: "Пост 3",
//     text: "Третий пост, который я оставил",
//     date: "22.01.2024",
//     authorId: "007",
//     likes: "24",
//     views: "395",
//   },
//   {
//     id: "004",
//     title: "Пост 4",
//     text: "четверты пост, который я оставил",
//     date: "23.01.2024",
//     authorId: "007",
//     likes: "99",
//     views: "2586",
//   },
// ];

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
