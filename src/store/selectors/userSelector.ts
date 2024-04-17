import { RootState } from "../types";

export const getUserSelector = (state: RootState) => state.user.user;

export const getUserIdSelector = (state: RootState) => state.user.user.id;

export const getIsUserLoadingSelector = (state: RootState) =>
  state.user.isLoading;

export const getIsUserErrorSelector = (state: RootState) =>
  state.user.errorMessage;

export const getIsAuthSelector = (state: RootState) => state.user.isAuth;
export const getIsAuthChangedLoadingSelector = (state: RootState) =>
  state.user.isAuthChangedLoading;
