import { FlatList, Text, View } from "react-native";
import { useAppSelector } from "../../store";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";
import { useTranslation } from "react-i18next";

export const FavoritesQuestsList = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  return (
    <>
      <Text style={styles.title}>{t("favoritesQuests")}</Text>
      {/* <FlatList
        contentContainerStyle={styles.postsWrapper}
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(post) => post.id}
        horizontal
        nestedScrollEnabled
      /> */}
    </>
  );
};
