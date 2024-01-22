import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, Posts, Followers, Follow, Settings } from "../screens";
import { SCREENS } from "../constants/screens";
import { MainStackParamsList } from "../types";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator<MainStackParamsList>();

export const MainStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.PROFILE}
      screenOptions={{
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen
        name={SCREENS.PROFILE}
        component={Profile}
        options={{ title: t("profile") }}
      />
      <Stack.Screen
        name={SCREENS.POSTS}
        component={Posts}
        options={{ title: t("posts") }}
      />
      <Stack.Screen
        name={SCREENS.FOLLOWERS}
        component={Followers}
        options={{ title: t("followers") }}
      />
      <Stack.Screen
        name={SCREENS.FOLLOW}
        component={Follow}
        options={{ title: t("follows") }}
      />
      <Stack.Screen
        name={SCREENS.SETTINGS}
        component={Settings}
        options={{ title: t("settings") }}
      />
    </Stack.Navigator>
  );
};
