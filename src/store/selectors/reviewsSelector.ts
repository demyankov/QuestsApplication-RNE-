import { RootState } from "../types";

export const getQuestReviewsSelector = (state: RootState) =>
  state.reviews.reviews;

export const getUserReviewsSelector = (state: RootState) =>
  state.reviews.userReviews;

export const getCoutOfUserReviewsSelector = (state: RootState) =>
  state.reviews.userReviews.length;

export const getIsReviewsLoadingSelector = (state: RootState) =>
  state.reviews.isLoading;

export const getReviewsLoadingMessage = (state: RootState) =>
  state.reviews.loadingMessage;

export const getReviewsErrorMessage = (state: RootState) =>
  state.reviews.errorMessage;

export const getsAverageRatingSelector = (state: RootState) =>
  state.reviews.averageRating;
