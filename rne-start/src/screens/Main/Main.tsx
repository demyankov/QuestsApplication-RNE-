import { useTheme } from "@react-navigation/native";
import * as Localization from "expo-localization";
import { createStyles } from "./styles";
import { Header, Loader, QuestsList } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { SCREENS } from "../../constants";
import { ImageBackground } from "expo-image";
import {
  getActiveQuests,
  getIsLoadingQuests,
  getQuestsAction,
  useAppDispatch,
  useAppSelector,
  signUpAction,
} from "../../store";
import { useEffect } from "react";

export const Main = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const language = Localization.locale.substring(0, 2);
  const quests = useAppSelector(getActiveQuests);
  const isLoading = useAppSelector(getIsLoadingQuests);

  const handleSignUp = () => {
    dispatch(signUpAction({ email: "2@mail.ru", password: "1234587" }));
  };

  useEffect(() => {
    dispatch(getQuestsAction("questsDetails"));
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={{
          uri: "https://avatars.mds.yandex.net/i?id=4f56b40839b746aa5ec7fccaaa462303_l-8230897-images-thumbs&ref=rim&n=13&w=1680&h=1050",
        }}
        style={{ flex: 1 }}
        imageStyle={{ resizeMode: "cover", opacity: 0.4 }}
      >
        <Header />
        <Pressable onPress={handleSignUp}>
          <Text style={styles.text}>Регистрация</Text>
        </Pressable>
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
