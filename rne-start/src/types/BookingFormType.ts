import { BOOKING_FORM } from "../constants";

export interface BookingFormType {
  [BOOKING_FORM.FIRST_NAME]: string;
  [BOOKING_FORM.EMAIL]: string;
  [BOOKING_FORM.PHONE]: string;
  [BOOKING_FORM.COUNT_OF_GAMERS]: string;
  [BOOKING_FORM.COMMENT]?: string;
}
