import { Button, Pressable, ScrollView, Text, View } from "react-native";
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
import { CustomInput, User } from "../../components";
import { PROFILE_SETTINGS } from "../../constants";
import { ImageBackground } from "expo-image";

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
    formState: { errors },
  } = useForm<SettingProfileType>({
    defaultValues,
    resolver: yupResolver(settingsProfileScheme),
    mode: "onBlur",
  });

  const handleUpdateProfile = () => console.log(getValues());
  // dispatch(updateProfileSettings(getValues()));

  return (
    <ScrollView style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        imageStyle={{ resizeMode: "cover", opacity: 0.4 }}
      >
        <User />
        <Text style={styles.title}>{t("personalData")}</Text>
        <View style={styles.inputsWrapper}>
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
          <Button
            title={t("buttons.save")}
            onPress={handleSubmit(handleUpdateProfile)}
          />
        </View>
        <Pressable onPress={handleUpdateProfile}>
          <Text>123{errors.root?.message}</Text>
        </Pressable>
      </ImageBackground>
    </ScrollView>
  );
};
