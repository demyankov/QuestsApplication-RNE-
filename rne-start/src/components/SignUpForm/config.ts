import { AUTH_FORM } from "../../constants";

export const inputs = [
  { name: AUTH_FORM.EMAIL, label: "E-mail" },
  { name: AUTH_FORM.PASSWORD, label: "password" },
];

export const defaultValues = {
  [AUTH_FORM.PASSWORD]: "",
  [AUTH_FORM.EMAIL]: "",
};
