import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Profile,
  Posts,
  Followers,
  Follow,
  Settings,
  QuestsList,
  QuestDetails,
} from '../screens';
import { SCREENS } from '../constants/screens';
import { MainStackParamsList } from '../types';
import { useTranslation } from 'react-i18next';
import { QuestCardList } from '../constants/questCardsList';

const Stack = createNativeStackNavigator<MainStackParamsList>();

interface IStackList {
  name: SCREENS;
  component: any;
  title: string;
}

const stackList: IStackList[] = [
  { name: SCREENS.PROFILE, component: Profile, title: 'profile' },
  { name: SCREENS.POSTS, component: Posts, title: 'posts' },
  { name: SCREENS.FOLLOWERS, component: Followers, title: 'followers' },
  { name: SCREENS.FOLLOW, component: Follow, title: 'follows' },
  { name: SCREENS.SETTINGS, component: Settings, title: 'settings' },
  { name: SCREENS.QUESTS, component: QuestsList, title: 'questsList' },
  {
    name: SCREENS.QUESTDETAILS,
    component: QuestDetails,
    title: 'questDetails',
  },
];

export const MainStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.QUESTS}
      screenOptions={{
        animation: 'fade_from_bottom',
      }}
    >
      {stackList.map(({ name, component, title }) => (
        <Stack.Screen
          name={name}
          component={component}
          options={{ title: t(title) }}
        />
      ))}
    </Stack.Navigator>
  );
};
