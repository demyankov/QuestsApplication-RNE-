import { createSlice } from "@reduxjs/toolkit";
import { bookingAction } from "../actions";

interface IBookingSlice {
  successMessage: string;
  errorMessage: string;
  isLoading: boolean;
}

const initialState: IBookingSlice = {
  successMessage: "",
  errorMessage: "",
  isLoading: false,
};

const bookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(bookingAction.pending, (state) => {
        state.isLoading = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(bookingAction.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = "Квест успешно забронирован";
      })
      .addCase(bookingAction.rejected, (state, { error }) => {
        state.errorMessage = error.message || "Ошибка бронирования квеста";
        state.isLoading = false;
      });
  },
});

export const { reducer: bookingReducer } = bookingSlice;
