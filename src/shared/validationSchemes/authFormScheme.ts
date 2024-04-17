import * as Yup from "yup";
import { emailValidation, passwordValidation } from "../validationRules";

import { AUTH_FORM } from "../../constants";

export const authFormScheme = Yup.object().shape({
  [AUTH_FORM.PASSWORD]: passwordValidation,
  [AUTH_FORM.EMAIL]: emailValidation.required("requiredField"),
});
