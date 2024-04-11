import * as Localization from "expo-localization";
import { ImageBackground, SafeAreaView, View } from "react-native";
import { styles } from "./styles";

import { useTranslation } from "react-i18next";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import { AUTH_FORMS } from "./config";
import { SignInForm, ToggleButton } from "../../components";

export const Auth = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState<AUTH_FORMS>(AUTH_FORMS.SIGN_IN);

  const toggleForm = () => {
    form === AUTH_FORMS.SIGN_IN
      ? setForm(AUTH_FORMS.SIGN_UP)
      : setForm(AUTH_FORMS.SIGN_IN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.wrapper}
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
      >
        <View>
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
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
