import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, Posts, Followers, Follow } from "../screens";
import { SCREENS } from "../constants/screens";
import { MainStackParamsList } from "../types";

const Stack = createNativeStackNavigator<MainStackParamsList>();

export const MainStack = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.PROFILE}
    screenOptions={{
      animation: "fade_from_bottom",
    }}
  >
    <Stack.Screen name={SCREENS.PROFILE} component={Profile} />
    <Stack.Screen name={SCREENS.POSTS} component={Posts} />
    <Stack.Screen name={SCREENS.FOLLOWERS} component={Followers} />
    <Stack.Screen name={SCREENS.FOLLOW} component={Follow} />
  </Stack.Navigator>
);
