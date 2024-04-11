import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";
import { inputs } from "./data";

import {
  getUserSelector,
  updateProfileSettings,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { SettingProfileType } from "../../types";
import { settingsProfileScheme } from "../../shared/validationSchemes";
import { CustomButton, CustomInput, User } from "../../components";
import { PROFILE_SETTINGS } from "../../constants";
import { ImageBackground } from "expo-image";
import { scaleSize } from "../../utils";

export const Settings = () => {
  const dispatch = useAppDispatch();
  const { firstName, secondName, age, phone, location } =
    useAppSelector(getUserSelector);

  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  const defaultValues = {
    [PROFILE_SETTINGS.FIRST_NAME]: t(firstName),
    [PROFILE_SETTINGS.SECOND_NAME]: t(secondName),
    [PROFILE_SETTINGS.AGE]: t(age),
    [PROFILE_SETTINGS.PHONE]: t(phone),
    [PROFILE_SETTINGS.LOCATION]: t(location),
  };

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<SettingProfileType>({
    defaultValues,
    resolver: yupResolver(settingsProfileScheme),
    mode: "onBlur",
  });

  const disabled = !isDirty || !isValid;

  const handleUpdateProfile = () =>
    dispatch(updateProfileSettings(getValues()));

  return (
    <View>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        imageStyle={{ resizeMode: "cover", opacity: 0.4 }}
        style={styles.wrapper}
      >
        <User />
        <Text style={styles.title}>{t("personalData")}</Text>
        <KeyboardAvoidingView
          style={styles.inputsWrapper}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={scaleSize(10)}
        >
          {inputs.map(({ name, label }) => {
            let errorMessage = errors[name]?.message;
            return (
              <CustomInput
                key={name}
                control={control}
                name={name}
                label={t(label)}
                error={errorMessage && t(`errors.${errors[name]?.message}`)}
              />
            );
          })}
          <CustomButton
            title="buttons.save"
            handleClick={handleSubmit(handleUpdateProfile)}
            disabled={disabled}
          />
        </KeyboardAvoidingView>
        <Text>{errors.root?.message}</Text>
      </ImageBackground>
    </View>
  );
};
