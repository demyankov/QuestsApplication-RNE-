import { createSlice } from "@reduxjs/toolkit";

export interface Subscriber {
  id: string;
  firstName: string;
  secondName: string;
  nickName: string;
  age: string;
  link: string;
}

const initialState: Subscriber[] = [
  {
    id: "007",
    firstName: "Аркадий",
    secondName: "Петушков",
    nickName: "arkasha89",
    age: "35",
    link: "",
  },
];

const subscribersSlice = createSlice({
  name: "Subscribers",
  initialState,
  reducers: {
    addSubscriber(state, { payload }: { payload: Subscriber }) {
      state = [...state, payload];
    },
  },
});

export const {
  reducer: subscribersReducer,
  actions: { addSubscriber },
} = subscribersSlice;
