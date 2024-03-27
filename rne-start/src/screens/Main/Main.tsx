import { useTheme } from "@react-navigation/native";
import * as Localization from "expo-localization";
import { createStyles } from "./styles";
import { Header, QuestsList } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { useTranslation } from "react-i18next";
import { SCREENS } from "../../constants";
import { questCardList } from "../../constants/questCardsList";

export const Main = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();
  const language = Localization.locale.substring(0, 2);
  const list = questCardList[language];

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header />
      <Text style={styles.title}>{t(`${SCREENS.MAIN}.title`)}</Text>
      <Text style={styles.text}>{t(`${SCREENS.MAIN}.mainText`)}</Text>
      <QuestsList list={list} />
    </SafeAreaView>
  );
};
