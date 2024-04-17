import { ImageBackground, SafeAreaView, Text } from "react-native";
import { createStyles } from "./styles";
import {
  getFavoritesAction,
  getFavoritesSelector,
  getIsFavoritesLoadingSelector,
  getQuests,
  getUserSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { Loader, QuestsList } from "../../components";
import { useFocusEffect, useTheme } from "@react-navigation/native";

import { filteredByArray } from "../../services";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const Favorites = () => {
  const favorites = useAppSelector(getFavoritesSelector);
  const quests = useAppSelector(getQuests);
  const isLoading = useAppSelector(getIsFavoritesLoadingSelector);
  const dispatch = useAppDispatch();
  const list = filteredByArray(quests, favorites);
  const { id } = useAppSelector(getUserSelector);
  const { t } = useTranslation();

  const theme = useTheme();
  const styles = createStyles(theme);

  const isNoFavorites = !list.length;

  useFocusEffect(
    useCallback(() => {
      dispatch(
        getFavoritesAction({ collectionName: "favorites", docName: id })
      );
    }, [])
  );

  return isLoading ? (
    <Loader />
  ) : (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.wrapper}
        source={require("../../assets/bg.jpg")}
        imageStyle={{ resizeMode: "cover", opacity: 0.4 }}
      >
        {isNoFavorites && <Text style={styles.text}>{t("noFavorites")}</Text>}
        <QuestsList list={list} />
      </ImageBackground>
    </SafeAreaView>
  );
};
