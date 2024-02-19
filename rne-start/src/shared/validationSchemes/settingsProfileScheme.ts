import * as Yup from "yup";
import {
  ageValidation,
  countryValidation,
  nameValidation,
} from "../validationRules";

import { PROFILE_SETTINGS } from "../../constants";

export const settingsProfileScheme = Yup.object().shape({
  [PROFILE_SETTINGS.FIRST_NAME]: nameValidation,
  [PROFILE_SETTINGS.SECOND_NAME]: nameValidation,
  [PROFILE_SETTINGS.AGE]: ageValidation,
  [PROFILE_SETTINGS.LOCATION]: countryValidation,
});
