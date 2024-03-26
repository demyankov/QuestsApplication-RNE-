import { createSlice } from "@reduxjs/toolkit";

interface IVisitedSlice {
  visited: string[];
  isLoading: boolean;
}

const initialState: IVisitedSlice = {
  visited: [],
  isLoading: true,
};

const visitedQuestsSlice = createSlice({
  name: "VisitedQuests",
  initialState,
  reducers: {
    toggleVisited(state, { payload }: { payload: string }) {
      if (state.visited.includes(payload)) {
        state.visited = state.visited.filter((id) => id !== payload);
        return;
      }

      state.visited = [...state.visited, payload];
    },

    deleteAllVisited(state) {
      state.visited = [];
    },
  },
});

export const {
  reducer: visitedQuestsReducer,
  actions: { toggleVisited, deleteAllVisited },
} = visitedQuestsSlice;
