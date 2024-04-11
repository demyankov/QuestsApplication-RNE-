import { createAsyncThunk } from "@reduxjs/toolkit";
import { book } from "../../api";
import { IBooking } from "../../types";
import { getScheduleAction } from "..";

interface BookingActionProps {
  apiPath: string;
  bookedItem: IBooking;
}

export const bookingAction = createAsyncThunk<void, BookingActionProps>(
  "Booking/bookingAction",
  async ({ apiPath, bookedItem }, { dispatch }) => {
    const formData = new FormData();
    Object.keys(bookedItem).forEach((key) =>
      formData.append(key, bookedItem[key])
    );

    book(apiPath, formData);
  }
);
