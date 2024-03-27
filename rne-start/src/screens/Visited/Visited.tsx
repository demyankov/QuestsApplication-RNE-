import * as Localization from "expo-localization";
import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { getVisitedSelector, useAppSelector } from "../../store";
import { QuestsList } from "../../components";
import { questCardList } from "../../constants/questCardsList";
import { IQuestCard } from "../../types";

export const Visited = () => {
  const visited = useAppSelector(getVisitedSelector);
  const language = Localization.locale.substring(0, 2);

  const filteredByArray = (objArray: IQuestCard[], filterArray: string[]) => {
    return objArray.filter(({ id }) => filterArray.includes(id));
  };
  const list = filteredByArray(questCardList[language], visited);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={{
          uri: "https://bogatyr.club/uploads/posts/2024-03/1709693770_bogatyr-club-f44i-p-fon-dlya-prilozheniya-15.jpg",
        }}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <QuestsList list={list} />
      </ImageBackground>
    </SafeAreaView>
  );
};
