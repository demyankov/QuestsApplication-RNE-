import { FlatList, Text, View } from "react-native";
import { postsSelector, useAppSelector } from "../../store";
import { Post } from "../Post/Post";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";
import { useTranslation } from "react-i18next";

export const LastPostsList = () => {
  const posts = useAppSelector(postsSelector);
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  return (
    <>
      <Text style={styles.title}>{t("lastPosts")}</Text>
      <FlatList
        contentContainerStyle={styles.postsWrapper}
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(post) => post.id}
        horizontal
        nestedScrollEnabled
      />
    </>
  );
};
