import {
  ImageBackground,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useCallback, useState } from "react";

import { styles } from "./styles";
import { AUTH_FORMS } from "./config";

import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { SignInForm, ToggleButton } from "../../components";
import { getUserIdSelector, useAppSelector } from "../../store";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MainStackType } from "../../types";
import { SCREENS } from "../../constants";

export const Auth = () => {
  const [form, setForm] = useState<AUTH_FORMS>(AUTH_FORMS.SIGN_IN);
  const userId = useAppSelector(getUserIdSelector);
  const { navigate } = useNavigation<MainStackType>();

  const toggleForm = () => {
    form === AUTH_FORMS.SIGN_IN
      ? setForm(AUTH_FORMS.SIGN_UP)
      : setForm(AUTH_FORMS.SIGN_IN);
  };
  console.log("userId", userId);

  useFocusEffect(
    useCallback(() => {
      if (userId) {
        navigate(SCREENS.MAIN);
      }
    }, [userId])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.wrapper}
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
      >
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.tabs}>
            <View style={styles.tabsWrapper}>
              <ToggleButton
                title="signIn"
                handleClick={toggleForm}
                clicked={form === AUTH_FORMS.SIGN_IN}
                withoutBorder
              />
              <ToggleButton
                title="signUp"
                handleClick={toggleForm}
                clicked={form === AUTH_FORMS.SIGN_UP}
                withoutBorder
              />
            </View>
          </View>
          {form === AUTH_FORMS.SIGN_IN ? (
            <SignInForm />
          ) : (
            <SignUpForm toggleForm={toggleForm} />
          )}
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};
