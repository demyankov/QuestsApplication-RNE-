import { RootState } from "../types";

export const getVisitedSelector = (state: RootState) => state.visited.visited;

export const getVisitedCountSelector = (state: RootState) =>
  state.visited.visited.length;

export const getIsVisitedLoadingSelector = (state: RootState) =>
  state.visited.isLoading;
