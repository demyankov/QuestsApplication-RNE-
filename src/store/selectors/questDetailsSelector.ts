import { RootState } from "../types";

export const getQuestDetails = (state: RootState) =>
  state.questDetails.currentQuest;

export const getIsLoadingQuestDetails = (state: RootState) =>
  state.questDetails.isLoading;

export const getIsLoadinQuestDetailsMessage = (state: RootState) =>
  state.questDetails.loadingMessage;
