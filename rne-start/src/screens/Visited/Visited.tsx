import * as Localization from "expo-localization";
import { ImageBackground, SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { getVisitedSelector, useAppSelector } from "../../store";
import { QuestsList } from "../../components";
import { questCardList } from "../../constants/questCardsList";
import { IQuestCard } from "../../types";
import { useTranslation } from "react-i18next";

export const Visited = () => {
  const visited = useAppSelector(getVisitedSelector);
  const language = Localization.locale.substring(0, 2);
  const { t } = useTranslation();

  const filteredByArray = (objArray: IQuestCard[], filterArray: string[]) => {
    return objArray.filter(({ id }) => filterArray.includes(id));
  };
  const list = filteredByArray(questCardList[language], visited);

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
