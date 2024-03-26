import { RootState } from "../types";

export const getVisitedSelector = (state: RootState) => state.visited.visited;

export const getIsVisitedLoadingSelector = (state: RootState) =>
  state.visited.isLoading;
