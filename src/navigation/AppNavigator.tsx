import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { MainStack } from "./MainStack";

import { STACKS } from "../constants/screens";
import { AppNavigatorParamList } from "../types";
import { User, clearUser, setUser, useAppDispatch } from "../store";
import { auth } from "../firebase";
import { getDocByName } from "../api";

const AppStack = createNativeStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // Получаем информацию о пользователе
      if (user?.uid) {
        const data = await getDocByName("users", user.uid);

        dispatch(setUser(data as User));
      }
    });
    return () => {
      dispatch(clearUser());
    };
  }, []);

  return (
    <SafeAreaProvider>
      <AppStack.Navigator
        initialRouteName={STACKS.MAIN_STACK}
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      >
        <AppStack.Screen name={STACKS.MAIN_STACK} component={MainStack} />
      </AppStack.Navigator>
    </SafeAreaProvider>
  );
};
