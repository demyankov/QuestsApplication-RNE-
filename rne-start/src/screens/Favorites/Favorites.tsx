import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { getFavoritesSelector, getQuests, useAppSelector } from "../../store";
import { QuestsList } from "../../components";

import { filteredByArray } from "../../services";

export const Favorites = () => {
  const favorites = useAppSelector(getFavoritesSelector);
  const quests = useAppSelector(getQuests);

  const list = filteredByArray(quests, favorites);

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
