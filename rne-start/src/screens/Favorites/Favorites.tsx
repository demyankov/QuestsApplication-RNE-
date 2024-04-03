import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./styles";
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
import { useFocusEffect } from "@react-navigation/native";

import { filteredByArray } from "../../services";
import { useCallback } from "react";

export const Favorites = () => {
  const favorites = useAppSelector(getFavoritesSelector);
  const quests = useAppSelector(getQuests);
  const isLoading = useAppSelector(getIsFavoritesLoadingSelector);
  const dispatch = useAppDispatch();
  const list = filteredByArray(quests, favorites);
  const { id } = useAppSelector(getUserSelector);

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
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.wrapper}
        source={require("../../assets/bg.jpg")}
        imageStyle={{ resizeMode: "cover", opacity: 0.4 }}
      >
        <QuestsList list={list} />
      </ImageBackground>
    </SafeAreaView>
  );
};
