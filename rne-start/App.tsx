import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { StyleSheet, SafeAreaView, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { THEMES, theme } from "./src/constants/theme";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const systemColorTheme = useColorScheme() || THEMES.LIGHT;

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <NavigationContainer theme={theme[systemColorTheme]}>
              <AppNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
