import { createSlice } from "@reduxjs/toolkit";
import { getVisitedAction, toggleVisitedAction } from "../actions";

interface IVisitedSlice {
  visited: string[];
  isLoading: boolean;
  loadingMessage: string;
}

const initialState: IVisitedSlice = {
  visited: [],
  isLoading: true,
  loadingMessage: "",
};

const visitedSlice = createSlice({
  name: "Visited",
  initialState,
  reducers: {
    clearVisited(state) {
      state.visited = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getVisitedAction.pending, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getVisitedAction.fulfilled, (state, { payload }) => {
        state.visited = payload;
        console.log("visited from slice", payload);
        state.loadingMessage = "";
        state.isLoading = false;
      })
      .addCase(getVisitedAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.loadingMessage = error.message || "Ошибка запроса";
      })
      .addCase(toggleVisitedAction.rejected, (state, { error }) => {
        state.loadingMessage = error.message || "Ошибка запроса";
      });
  },
});

export const {
  reducer: visitedReducer,
  actions: { clearVisited },
} = visitedSlice;
