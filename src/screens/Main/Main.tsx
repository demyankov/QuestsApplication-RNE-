import { useTheme } from "@react-navigation/native";
import * as Localization from "expo-localization";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { useTranslation } from "react-i18next";
import { ImageBackground } from "expo-image";
import { useEffect } from "react";

import { createStyles } from "./styles";

import { Header, Loader, QuestsList } from "../../components";
import { SCREENS } from "../../constants";
import {
  getActiveQuests,
  getIsLoadingQuests,
  getQuestsAction,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export const Main = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const language = Localization.locale.substring(0, 2);
  const quests = useAppSelector(getActiveQuests);
  const isLoading = useAppSelector(getIsLoadingQuests);

  const collection = language === "en" ? "questDetailsEn" : "questsDetails";

  useEffect(() => {
    dispatch(getQuestsAction(collection));
  }, []);

  const uri =
    "https://avatars.mds.yandex.net/i?id=4f56b40839b746aa5ec7fccaaa462303_l-8230897-images-thumbs&ref=rim&n=13&w=1680&h=1050";

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={{ uri }}
        style={styles.background}
        imageStyle={styles.imageStyle}
      >
        <Header />
        <Text style={[styles.title, styles.textShadow]}>
          {t(`${SCREENS.MAIN}.title`)}
        </Text>
        <Text style={[styles.text, styles.textShadow]}>
          {t(`${SCREENS.MAIN}.mainText`)}
        </Text>
        {isLoading ? <Loader /> : <QuestsList list={quests} />}
      </ImageBackground>
    </SafeAreaView>
  );
};
