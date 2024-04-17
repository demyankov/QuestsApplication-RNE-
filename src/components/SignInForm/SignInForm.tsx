import { useNavigation, useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesome } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { useToast } from "react-native-toast-notifications";

import { defaultValues, inputs } from "./config";
import { createStyles } from "./styles";

import { CustomInput } from "../CustomInput/CustomInput";
import { Loader } from "../Loader/Loader";
import { CustomButton } from "../CustomButton/CustomButton";

import {
  getIsUserErrorSelector,
  getIsUserLoadingSelector,
  signInAction,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { AuthFormType, MainStackType } from "../../types";
import { authFormScheme } from "../../shared/validationSchemes";
import { AUTH_FORM, SCREENS } from "../../constants";

export const SignInForm = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsUserLoadingSelector);
  const toast = useToast();
  const { navigate } = useNavigation<MainStackType>();
  const error = useAppSelector(getIsUserErrorSelector);

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm<AuthFormType>({
    defaultValues,
    resolver: yupResolver(authFormScheme),
    mode: "onBlur",
  });

  const isDisabled = !isValid && !isDirty && !isLoading;

  const navigateToMain = () => {
    navigate(SCREENS.MAIN);
    reset();
  };

  const handleSignIn = async () => {
    const { email, password } = getValues();
    await dispatch(signInAction({ email, password }));

    if (!error) {
      reset();
      navigate(SCREENS.PROFILE);
    } else {
      toast.show(t(error || "Ошибка авторизации"), {
        type: "danger",
        placement: "top",
        animationType: "slide-in",
        icon: <FontAwesome name="hand-stop-o" size={24} color="#fff" />,
      });
    }
  };

  return (
    <View style={styles.form}>
      {isLoading && <Loader />}
      {inputs.map(({ name, label }) => {
        let errorMessage = errors[name]?.message;
        return (
          <CustomInput
            secure={name === AUTH_FORM.PASSWORD}
            key={name}
            control={control}
            name={name}
            label={t(label)}
            error={errorMessage && t(`errors.${errors[name]?.message}`)}
          />
        );
      })}

      <CustomButton
        title="buttons.signIn"
        disabled={isDisabled}
        familyIcon="AntDesign"
        iconName="check"
        iconStart
        handleClick={handleSubmit(handleSignIn)}
      />
      <CustomButton
        title="buttons.cancel"
        familyIcon="MaterialIcons"
        iconName="cancel"
        iconStart
        handleClick={navigateToMain}
      />
    </View>
  );
};
