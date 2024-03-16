import * as Yup from "yup";

import {
  TEXT_PATTERN,
  EMAIL_PATTERN,
  USERNAME_PATTERN,
  NUMBER_PATTERN,
  COUNTRY_PATTERN,
} from "./regularExpressions";

export const passwordValidation = Yup.string()
  .matches(/^\S*$/, "noWhitespace")
  .matches(/^[\x00-\x7F]*$/, "noCyrillic")
  .min(5, "minChar5")
  .matches(/[A-Z]/, "requiredCapitalLetter")
  .matches(/[a-z]/, "requiredLowercaseLetter")
  .matches(/\d/, "requiredNumber")
  .matches(/[^a-zA-Z\d]/, "requiredSpecialCharacter")
  .required("requiredField");

export const textValidation = Yup.string().matches(
  TEXT_PATTERN,
  "incorrectCharacter"
);

export const emailValidation = Yup.string()
  .matches(EMAIL_PATTERN, "incorrectEmail")
  .min(4, "minChar4")
  .required("requiredField");

export const nameValidation = Yup.string()
  .matches(USERNAME_PATTERN, "incorrectName")
  .min(2, "minChar2")
  .max(25, "maxChar25")
  .required("requiredField");

export const ageValidation = Yup.string()
  .matches(NUMBER_PATTERN, "incorrectNumber")
  .max(3, "maxAge")
  .required("requiredField");

export const countryValidation = Yup.string()
  .matches(COUNTRY_PATTERN, "incorrectName")
  .min(2, "minChar2")
  .max(50, "maxChar50")
  .required("requiredField");

export const phoneValidationRequired = Yup.string()
  .matches(/^\d+$/, "incorrectPhone")
  .min(9, "minCharPhone")
  .max(17, "maxCharPhone")
  .required("requiredField");

export const phoneValidation = Yup.string()
  .matches(/^\+\d{1}\s\d{3}\s\d{3}\s\d{4}$/, "incorrectPhone")
  .min(8, "minCharPhone")
  .max(17, "maxCharPhone");
