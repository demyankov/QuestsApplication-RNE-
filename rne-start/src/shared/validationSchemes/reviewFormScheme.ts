import * as Yup from "yup";
import { textValidation } from "../validationRules";
import { REVIEW_FORM } from "../../constants";

export const reviewFormScheme = Yup.object().shape({
  [REVIEW_FORM.COMMENT]: textValidation.required("requiredField"),
});
