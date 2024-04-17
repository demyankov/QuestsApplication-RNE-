import { RootState } from "../types";

export const getQuests = (state: RootState) => state.quests.quests;

export const getActiveQuests = (state: RootState) => state.quests.activeQuests;

export const getIsLoadingQuests = (state: RootState) => state.quests.isLoading;
