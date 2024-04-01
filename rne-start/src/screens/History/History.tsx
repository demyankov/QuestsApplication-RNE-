import * as Localization from "expo-localization";
import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./styles";

import { IQuestCard } from "../../types";
import { useTranslation } from "react-i18next";

export const History = () => {
  const language = Localization.locale.substring(0, 2);
  const { t } = useTranslation();

  const filteredByArray = (objArray: IQuestCard[], filterArray: string[]) => {
    return objArray.filter(({ id }) => filterArray.includes(id));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.wrapper}
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
      ></ImageBackground>
    </SafeAreaView>
  );
};
