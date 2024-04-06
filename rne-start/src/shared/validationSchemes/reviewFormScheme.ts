import * as Yup from "yup";
import { REVIEW_FORM } from "../../constants";

export const reviewFormScheme = Yup.object().shape({
  [REVIEW_FORM.COMMENT]: Yup.string().required("requiredField"),
});
