import { createSlice } from "@reduxjs/toolkit";

export interface Subscription {
  id: string;
  firstName: string;
  secondName: string;
  nickName: string;
  age: string;
  link: string;
}

const initialState: Subscription[] = [
  {
    id: "001",
    firstName: "Геннадий",
    secondName: "Бабушкин",
    nickName: "gena89",
    age: "35",
    link: "",
  },
];

const subscriptionsSlice = createSlice({
  name: "Subscriptions",
  initialState,
  reducers: {
    addSubscription(state, { payload }: { payload: Subscription }) {
      state = [...state, payload];
    },
  },
});

export const {
  reducer: subscriptionsReducer,
  actions: { addSubscription },
} = subscriptionsSlice;
