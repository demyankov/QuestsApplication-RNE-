import { FlatList, Text, View } from "react-native";
import { questCardList } from "../../constants/questCardsList";
import { QuestCard } from "../../components";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";

export const QuestsList = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <FlatList
      contentContainerStyle={styles.wrapper}
      data={questCardList}
      renderItem={({ item }) => <QuestCard card={item} />}
    />
  );
};
