import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Profile, Posts, Subscribers, Subscriptions } from "../screens";
import { SCREENS } from "../constants/screens";

export type RootStackParamList = {
  [SCREENS.PROFILE]: undefined;
  [SCREENS.POSTS]: undefined;
  [SCREENS.SUBSCRIBERS]: undefined;
  [SCREENS.SUBSCRIPTONS]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStack = () => (
  <SafeAreaProvider>
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.PROFILE} component={Profile} />
      <Stack.Screen name={SCREENS.POSTS} component={Posts} />
      <Stack.Screen name={SCREENS.SUBSCRIBERS} component={Subscribers} />
      <Stack.Screen name={SCREENS.SUBSCRIPTONS} component={Subscriptions} />
    </Stack.Navigator>
  </SafeAreaProvider>
);
