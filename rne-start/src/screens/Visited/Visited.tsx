import { ImageBackground, SafeAreaView, Text } from "react-native";
import { createStyles } from "./styles";
import {
  getIsVisitedLoadingSelector,
  getQuests,
  getUserSelector,
  getVisitedAction,
  getVisitedSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { Loader, QuestsList } from "../../components";
import { filteredByArray } from "../../services";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const Visited = () => {
  const visited = useAppSelector(getVisitedSelector);
  const quests = useAppSelector(getQuests);
  const isLoading = useAppSelector(getIsVisitedLoadingSelector);
  const list = filteredByArray(quests, visited);
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(getUserSelector);
  const { t } = useTranslation();

  const theme = useTheme();
  const styles = createStyles(theme);

  const isNoVisited = !list.length;

  useFocusEffect(
    useCallback(() => {
      dispatch(getVisitedAction({ collectionName: "visited", docName: id }));
    }, [])
  );

  return isLoading ? (
    <Loader />
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.wrapper}
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
      >
        <QuestsList list={list} />
        {isNoVisited && <Text style={styles.text}>{t("noVisited")}</Text>}
      </ImageBackground>
    </SafeAreaView>
  );
};
