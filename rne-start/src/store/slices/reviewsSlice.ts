import { createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../types";
import {
  getQuestReviewsAction,
  getUserReviewsAction,
  sendReviewAction,
} from "../actions";

interface IRewiewsSlice {
  reviews: IReview[];
  userReviews: IReview[];
  isLoading: boolean;
  loadingMessage: string;
}

const initialState: IRewiewsSlice = {
  reviews: [],
  userReviews: [],
  isLoading: true,
  loadingMessage: "",
};

const reviewsSlice = createSlice({
  name: "Reviews",
  initialState,
  reducers: {
    clearReviews(state) {
      state.userReviews = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getQuestReviewsAction.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getQuestReviewsAction.fulfilled, (state, { payload }) => {
        state.reviews = payload;
        state.loadingMessage = "";
        state.isLoading = false;
      })
      .addCase(getQuestReviewsAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.loadingMessage = error.message || "Ошибка запроса";
      })
      .addCase(getUserReviewsAction.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getUserReviewsAction.fulfilled, (state, { payload }) => {
        state.userReviews = payload;
        state.loadingMessage = "";
        state.isLoading = false;
      })
      .addCase(getUserReviewsAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.loadingMessage = error.message || "Ошибка запроса";
      })
      .addCase(sendReviewAction.rejected, (state, { error }) => {
        state.loadingMessage = error.message || "Ошибка запроса";
      });
  },
});

export const {
  reducer: reviewsReducer,
  actions: { clearReviews },
} = reviewsSlice;
