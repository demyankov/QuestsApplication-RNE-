import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";

import { CustomLink } from "../CustomLink/CustomLink";
import { QuestsCardStatistics } from "../QuestCardStatistics/QuestCardStatistics";

import { IQuestCard } from "../../types";
import { SCREENS } from "../../constants";

export const QuestCard = ({ card }: { card: IQuestCard }) => {
  const { id, title, shortDescription, image } = card;

  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
        <QuestsCardStatistics card={card} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{shortDescription}</Text>
      <CustomLink
        title={t("buttons.details")}
        to={SCREENS.QUESTDETAILS}
        options={{ questId: id }}
      />
    </View>
  );
};
