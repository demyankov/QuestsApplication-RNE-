import { createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../types";
import {
  deleteReviewAction,
  getQuestReviewsAction,
  getUserReviewsAction,
  sendReviewAction,
} from "../actions";

interface IRewiewsSlice {
  reviews: IReview[];
  userReviews: IReview[];
  averageRating: string;
  isLoading: boolean;
  loadingMessage: string;
  errorMessage: string;
}

const initialState: IRewiewsSlice = {
  reviews: [],
  userReviews: [],
  averageRating: "0",
  isLoading: true,
  loadingMessage: "",
  errorMessage: "",
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
      .addCase(getQuestReviewsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestReviewsAction.fulfilled, (state, { payload }) => {
        state.reviews = payload;
        state.isLoading = false;
      })
      .addCase(getQuestReviewsAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.errorMessage = error.message || "Ошибка запроса";
      })
      .addCase(getUserReviewsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserReviewsAction.fulfilled, (state, { payload }) => {
        state.userReviews = payload;

        const sumRates = payload.reduce((sum, { rate }) => sum + rate, 0);
        const averageRating = payload.length && sumRates / payload.length;

        state.averageRating = averageRating.toFixed(2);
        state.isLoading = false;
      })
      .addCase(getUserReviewsAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.errorMessage = error.message || "Ошибка получения отзывов";
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.loadingMessage = "";
        state.errorMessage = "";
        state.isLoading = true;
      })
      .addCase(sendReviewAction.fulfilled, (state) => {
        state.loadingMessage = "sendReviewSuccessfully";
        state.isLoading = false;
      })
      .addCase(sendReviewAction.rejected, (state, { error }) => {
        state.errorMessage = error.message || "Ошибка. Отзыв не сохранен";
        state.isLoading = false;
      })
      .addCase(deleteReviewAction.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteReviewAction.fulfilled, (state) => {
        state.loadingMessage = "Отзыв успешно удален";
        state.isLoading = false;
      })
      .addCase(deleteReviewAction.rejected, (state, { error }) => {
        state.errorMessage = error.message || "Ошибка удаления отзыва";
        state.isLoading = false;
      });
  },
});

export const {
  reducer: reviewsReducer,
  actions: { clearReviews },
} = reviewsSlice;
