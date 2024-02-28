import * as Localization from "expo-localization";
import Animated from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";

import { LANGUAGES } from "../../constants/languages";
import { questCardList } from "../../constants/questCardsList";
import { QuestCard } from "../QuestCard/QuestCard";

export const QuestsList = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const language = Localization.locale.substring(0, 2);

  return (
    <Animated.FlatList
      contentContainerStyle={styles.wrapper}
      data={questCardList[language as LANGUAGES]}
      renderItem={({ item }) => <QuestCard card={item} />}
    />
  );
};
