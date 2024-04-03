import { createSlice } from "@reduxjs/toolkit";
import { getVisitedAction, toggleVisitedAction } from "../actions";

interface IRewiewsSlice {
  reviews: string[];
  userReviews: string[];
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
  name: "Visited",
  initialState,
  reducers: {
    deleteAllUserReviews(state) {
      state.userReviews = [];
    },
  },
  extraReducers(builder) {
    builder;
    // .addCase(getReviewsAction.pending, (state, { payload }) => {
    //   state.isLoading = false;
    // })
    // .addCase(getReviewsAction.fulfilled, (state, { payload }) => {
    //   state.reviews = payload;
    //   state.loadingMessage = "";
    //   state.isLoading = false;
    // })
    // .addCase(getReviewsAction.rejected, (state, { error }) => {
    //   state.isLoading = false;
    //   state.loadingMessage = error.message || "Ошибка запроса";
    // });
  },
});

export const {
  reducer: rewiewsReducer,
  actions: { deleteAllUserReviews },
} = reviewsSlice;
