import * as Localization from "expo-localization";
import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { getFavoritesSelector, useAppSelector } from "../../store";
import { QuestsList } from "../../components";
import { questCardList } from "../../constants/questCardsList";
import { IQuestCard } from "../../types";

export const Favorites = () => {
  const favorites = useAppSelector(getFavoritesSelector);
  const language = Localization.locale.substring(0, 2);

  const filteredByArray = (objArray: IQuestCard[], filterArray: string[]) => {
    return objArray.filter(({ id }) => filterArray.includes(id));
  };
  const list = filteredByArray(questCardList[language], favorites);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={{
          uri: "https://avatars.mds.yandex.net/i?id=4f56b40839b746aa5ec7fccaaa462303_l-8230897-images-thumbs&ref=rim&n=13&w=1680&h=1050",
        }}
        imageStyle={{ resizeMode: "cover", opacity: 0.4 }}
      >
        <QuestsList list={list} />
      </ImageBackground>
    </SafeAreaView>
  );
};
