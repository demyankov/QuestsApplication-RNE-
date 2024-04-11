import { createSlice } from "@reduxjs/toolkit";
import { bookingAction } from "../actions";

interface IBookingSlice {
  loadingMessage: string;
  isLoading: boolean;
}

const initialState: IBookingSlice = {
  loadingMessage: "",
  isLoading: true,
};

const bookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(bookingAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bookingAction.fulfilled, (state) => {
        state.isLoading = false;
        state.loadingMessage = "";
      })
      .addCase(bookingAction.rejected, (state, { error }) => {
        state.loadingMessage = error.message || "Ошибка запроса";
        state.isLoading = false;
      });
  },
});

export const { reducer: bookingReducer } = bookingSlice;
