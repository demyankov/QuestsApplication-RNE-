import { Button, TextInput, View } from "react-native";
import { styles } from "./styles";
import {
  getUserSelector,
  updateProfileSettings,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SettingProfileType } from "../../types";
import { settingsProfileScheme } from "../../shared/validationSchemes";
import { CustomInput } from "../../components";
import { PROFILE_SETTINGS } from "../../constants";
import { inputs } from "./data";

export const Settings = () => {
  const dispatch = useAppDispatch();
  const { firstName, secondName, age, location } =
    useAppSelector(getUserSelector);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SettingProfileType>({
    defaultValues: {
      [PROFILE_SETTINGS.FIRST_NAME]: firstName,
      [PROFILE_SETTINGS.SECOND_NAME]: secondName,
      [PROFILE_SETTINGS.AGE]: age,
      [PROFILE_SETTINGS.LOCATION]: location,
    },
    resolver: yupResolver(settingsProfileScheme),
    mode: "onBlur",
  });

  const handleUpdateProfile = () =>
    dispatch(updateProfileSettings(getValues()));

  return (
    <View style={styles.wrapper}>
      {inputs.map(({ name, label }) => (
        <CustomInput
          control={control}
          name={name}
          label={label}
          error={errors[name]?.message}
        />
      ))}
      <Button title="Submit" onPress={handleSubmit(handleUpdateProfile)} />
    </View>
  );
};
