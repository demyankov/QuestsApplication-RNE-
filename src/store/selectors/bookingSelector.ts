import { RootState } from "../types";

export const getBookingSuccessMessageSelector = (state: RootState) =>
  state.booking.successMessage;

export const getBookingErrorMessageSelector = (state: RootState) =>
  state.booking.errorMessage;

export const getIsBookingLoadingSelector = (state: RootState) =>
  state.booking.isLoading;
