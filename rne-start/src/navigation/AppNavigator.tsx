import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { STACKS } from "../constants/screens";

import { MainStack } from "./MainStack";
import { AppNavigatorParamList } from "../types";

const AppStack = createNativeStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => (
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
