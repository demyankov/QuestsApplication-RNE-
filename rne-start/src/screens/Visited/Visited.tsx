import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { getQuests, getVisitedSelector, useAppSelector } from "../../store";
import { QuestsList } from "../../components";
import { filteredByArray } from "../../services";

export const Visited = () => {
  const visited = useAppSelector(getVisitedSelector);
  const quests = useAppSelector(getQuests);

  const list = filteredByArray(quests, visited);

  return (
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
