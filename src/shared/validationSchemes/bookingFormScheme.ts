import * as Yup from "yup";
import {
  emailValidation,
  nameValidation,
  phoneValidationRequired,
  textValidation,
} from "../validationRules";

import { BOOKING_FORM } from "../../constants";

export const bookingFormScheme = Yup.object().shape({
  [BOOKING_FORM.FIRST_NAME]: nameValidation,
  [BOOKING_FORM.EMAIL]: emailValidation.required("requiredField"),
  [BOOKING_FORM.PHONE]: phoneValidationRequired,
  [BOOKING_FORM.TARIFF]: Yup.string().required("requiredField"),
  [BOOKING_FORM.COMMENT]: textValidation,
});
