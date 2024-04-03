import { NavigationProp } from "@react-navigation/native";
import { SCREENS, STACKS } from "../constants/screens";

export type MainStackParamsList = {
  [SCREENS.PROFILE]: undefined;
  [SCREENS.SETTINGS]: undefined;
  [SCREENS.MAIN]: undefined;
  [SCREENS.FAVORITES]: undefined;
  [SCREENS.REVIEWS]: undefined;
  [SCREENS.VISITED]: undefined;
  [SCREENS.HISTORY]: undefined;
  [SCREENS.QUESTDETAILS]: { questId: string } | undefined;
};

export type AppNavigatorParamList = {
  [STACKS.MAIN_STACK]: undefined;
};

export type MainStackType = NavigationProp<MainStackParamsList>;
export type AppNavigatorType = NavigationProp<AppNavigatorParamList>;
