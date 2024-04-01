import Animated from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";
import { QuestCard } from "../QuestCard/QuestCard";
import { IQuest } from "../../types";

export const QuestsList = ({ list }: { list: IQuest[] }) => {
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
