import * as Localization from "expo-localization";
import { ImageBackground, SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { getFavoritesSelector, useAppSelector } from "../../store";
import { QuestsList } from "../../components";
import { questCardList } from "../../constants/questCardsList";
import { IQuestCard } from "../../types";
import { useTranslation } from "react-i18next";

export const Favorites = () => {
  const favorites = useAppSelector(getFavoritesSelector);
  const language = Localization.locale.substring(0, 2);
  const { t } = useTranslation();

  const filteredByArray = (objArray: IQuestCard[], filterArray: string[]) => {
    return objArray.filter(({ id }) => filterArray.includes(id));
  };
  const list = filteredByArray(questCardList[language], favorites);

  return (
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
