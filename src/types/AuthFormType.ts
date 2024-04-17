import { AUTH_FORM } from "../constants";

export interface AuthFormType {
  [AUTH_FORM.EMAIL]?: string;
  [AUTH_FORM.PASSWORD]?: string;
}
