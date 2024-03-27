import Animated from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";
import { QuestCard } from "../QuestCard/QuestCard";
import { IQuestCard } from "../../types";

export const QuestsList = ({ list }: { list: IQuestCard[] }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Animated.FlatList
      contentContainerStyle={styles.wrapper}
      data={list}
      renderItem={({ item }) => <QuestCard card={item} />}
    />
  );
};
