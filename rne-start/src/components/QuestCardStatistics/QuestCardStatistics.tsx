import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { customQuestOptions } from "../../services";
import { IQuest } from "../../types";

export const QuestsCardStatistics = ({ card }: { card: IQuest }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();
  const {
    levelOfFear,
    difficultyLevel,
    contactLevel,
    teamSize,
    ageFrom,
    duration,
    interactive,
  } = card;

  const levelOfFearlLine = customQuestOptions({ value: levelOfFear });
  const contactLevelLine = customQuestOptions({ value: contactLevel });
  const difficultyLevelLine = customQuestOptions({ value: difficultyLevel });

  return (
    <View style={styles.statisticsWrapper}>
      <View style={styles.statisticsGroup}>
        {teamSize && (
          <View style={styles.statisticsItem}>
            <AntDesign name="team" size={22} color="yellow" />
            <Text style={styles.statisticaText}>{teamSize}</Text>
          </View>
        )}
        {duration && (
          <View style={styles.statisticsItem}>
            <AntDesign name="hourglass" size={22} color="yellow" />
            <Text style={styles.statisticaText}>{duration}</Text>
          </View>
        )}
        {ageFrom && (
          <View style={styles.statisticsItem}>
            <MaterialIcons name="child-care" size={22} color="yellow" />
            <Text style={styles.statisticaText}>{ageFrom}</Text>
          </View>
        )}
        {interactive && (
          <View style={styles.statisticsItem}>
            <MaterialCommunityIcons
              name="account-tie-voice"
              size={22}
              color="yellow"
            />
            <Text style={styles.statisticaText}>{t("interactive")}</Text>
          </View>
        )}
      </View>
      <View style={styles.statisticsGroup}>
        <View style={styles.statisticsItemSecondary}>
          {levelOfFearlLine.map((color, i) => (
            <AntDesign name="aliwangwang-o1" size={20} color={color} key={i} />
          ))}
        </View>
        <View style={styles.statisticsItemSecondary}>
          {difficultyLevelLine.map((color, i) => (
            <AntDesign name="lock" size={26} color={color} key={i} />
          ))}
        </View>
        <View
          style={[styles.statisticsItemSecondary, styles.statisticsItemFist]}
        >
          {contactLevelLine.map((color, i) => (
            <FontAwesome5 name="fist-raised" size={20} color={color} key={i} />
          ))}
        </View>
      </View>
    </View>
  );
};
