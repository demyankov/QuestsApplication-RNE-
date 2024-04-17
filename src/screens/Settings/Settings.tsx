import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigation, useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";
import { inputs } from "./data";

import {
  getUserSelector,
  setUser,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { MainStackType, SettingProfileType } from "../../types";
import { settingsProfileScheme } from "../../shared/validationSchemes";
import { CustomButton, CustomInput, User } from "../../components";
import { PROFILE_SETTINGS, SCREENS } from "../../constants";
import { ImageBackground } from "expo-image";
import { scaleSize } from "../../utils";
import { setUserAction } from "../../store/actions/setUserAction";
import { ToastOptions, useToast } from "react-native-toast-notifications";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { getDocByName } from "../../api";

export const Settings = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserSelector);
  const { firstName, secondName, age, phone, location, id } = user;
  const { navigate } = useNavigation<MainStackType>();

  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();
  const toast = useToast();

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

  const showMessage = (text: string, type: ToastOptions["type"]) =>
    toast.show(t(text), {
      type: type,
      placement: "top",
      animationType: "slide-in",
      icon:
        type === "success" ? (
          <FontAwesome6 name="face-smile-wink" size={24} color="#fff" />
        ) : (
          <FontAwesome name="hand-stop-o" size={24} color="#fff" />
        ),
    });

  const handleUpdateProfile = async () => {
    try {
      await dispatch(
        setUserAction({
          collectionName: "users",
          uid: id,
          data: { ...user, ...getValues() },
        })
      );
      onAuthStateChanged(auth, async (user) => {
        // Получаем информацию о пользователе
        const data = await getDocByName("users", user.uid);

        dispatch(setUser(data));
      });
      navigate(SCREENS.PROFILE);
      showMessage("Данные успешно сохранены", "success");
    } catch (error) {
      showMessage(error.message || "Ошибка сохранения данных", "danger");
    }
  };
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
