import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";

import { CustomLink } from "../CustomLink/CustomLink";
import { QuestsCardStatistics } from "../QuestCardStatistics/QuestCardStatistics";

import { IQuest } from "../../types";
import { SCREENS } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

export const QuestCard = ({ card }: { card: IQuest }) => {
  const { id, name, shortDescription, banner, isActive } = card;

  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  const gradient = ["#6d6c70", "#39383b", "#39383b", "#5b5a5c"];

  return (
    <LinearGradient
      colors={gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.wrapper, styles.shadow]}
    >
      <View style={styles.imageWrapper}>
        <Image source={banner} style={styles.image} />
        <QuestsCardStatistics card={card} />
        {!isActive && (
          <View style={styles.closed}>
            <Text style={styles.title}>{t("closed")}</Text>
          </View>
        )}
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>{shortDescription}</Text>
      <CustomLink
        title={t("buttons.details")}
        to={SCREENS.QUESTDETAILS}
        options={{ questId: id }}
      />
    </LinearGradient>
  );
};
