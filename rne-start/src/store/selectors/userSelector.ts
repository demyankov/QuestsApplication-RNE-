import { RootState } from "../types";

export const getUserSelector = (state: RootState) => state.user;

export const getUserIdSelector = (state: RootState) => state.user.id;
