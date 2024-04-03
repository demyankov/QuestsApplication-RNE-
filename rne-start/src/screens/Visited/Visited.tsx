import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./styles";
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
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export const Visited = () => {
  const visited = useAppSelector(getVisitedSelector);
  const quests = useAppSelector(getQuests);
  const isLoading = useAppSelector(getIsVisitedLoadingSelector);
  const list = filteredByArray(quests, visited);
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(getUserSelector);

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
      </ImageBackground>
    </SafeAreaView>
  );
};
