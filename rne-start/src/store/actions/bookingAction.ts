import { createAsyncThunk } from "@reduxjs/toolkit";
import { book } from "../../api";
import { IBooking } from "../../types";

interface BookingActionProps {
  apiPath: string;
  bookedItem: URLSearchParams;
}

export const bookingAction = createAsyncThunk<void, BookingActionProps>(
  "Booking/bookingAction",
  async ({ apiPath, bookedItem }) => book(apiPath, bookedItem)
);
