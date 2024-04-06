import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Profile,
  Settings,
  Main,
  QuestDetails,
  Favorites,
  Reviews,
  Visited,
  History,
} from "../screens";
import { SCREENS } from "../constants/screens";
import { MainStackParamsList } from "../types";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator<MainStackParamsList>();

interface IStackList {
  name: SCREENS;
  component: any;
  title?: string;
}

const stackList: IStackList[] = [
  { name: SCREENS.PROFILE, component: Profile, title: "profile" },
  { name: SCREENS.SETTINGS, component: Settings, title: "settings" },
  { name: SCREENS.FAVORITES, component: Favorites, title: "favoritesQuests" },
  { name: SCREENS.REVIEWS, component: Reviews, title: "reviews" },
  { name: SCREENS.VISITED, component: Visited, title: "visitedQuests" },
  { name: SCREENS.HISTORY, component: History, title: "history" },
  { name: SCREENS.MAIN, component: Main },
  {
    name: SCREENS.QUESTDETAILS,
    component: QuestDetails,
    title: "questDetailsTitle",
  },
];

export const MainStack = () => {
  const { t } = useTranslation();

  const getOptions = (title?: string) => ({
    title: title && t(title),
    headerShown: !!title,
  });

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MAIN}
      screenOptions={{
        animation: "fade_from_bottom",
      }}
    >
      {stackList.map(({ name, component, title }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={getOptions(title)}
        />
      ))}
    </Stack.Navigator>
  );
};
