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

interface IConfig {
  icon:
    | typeof AntDesign
    | typeof MaterialIcons
    | typeof FontAwesome5
    | typeof MaterialCommunityIcons;
  name: string;
  size: number;
  color: string;
  text: string;
  visibility: boolean;
}

export const QuestsDetailsStatistics = ({ quest }: { quest: any }) => {
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
  } = quest;

  const config: IConfig[] = [
    {
      icon: AntDesign,
      name: "team",
      size: 22,
      color: theme.colors.text,
      text: teamSize,
      visibility: !!teamSize,
    },
    {
      icon: AntDesign,
      name: "hourglass",
      size: 22,
      color: theme.colors.text,
      text: duration,
      visibility: !!duration,
    },
    {
      icon: MaterialIcons,
      name: "child-care",
      size: 22,
      color: theme.colors.text,
      text: ageFrom,
      visibility: !!ageFrom,
    },
    {
      icon: MaterialCommunityIcons,
      name: "account-tie-voice",
      size: 22,
      color: theme.colors.text,
      text: "Интерактивный",
      visibility: interactive,
    },
    {
      icon: AntDesign,
      name: "aliwangwang-o1",
      size: 22,
      color: theme.colors.text,
      text: `Уровень страха: ${levelOfFear}/5`,
      visibility: !!levelOfFear,
    },
    {
      icon: AntDesign,
      name: "lock",
      size: 22,
      color: theme.colors.text,
      text: `Сложность: ${difficultyLevel}/5`,
      visibility: !!difficultyLevel,
    },
    {
      icon: FontAwesome5,
      name: "fist-raised",
      size: 22,
      color: theme.colors.text,
      text: `Уровень контакта: ${contactLevel}/5`,
      visibility: !!contactLevel,
    },
  ];

  return (
    <View style={styles.wrapper}>
      {config.map(({ icon, name, size, color, text, visibility }, i) => {
        const Icon = icon;
        return (
          visibility && (
            <View style={styles.statisticsItem} key={i}>
              <Icon name={name} size={size} color="yellow" />
              <Text style={styles.text}>{text}</Text>
            </View>
          )
        );
      })}
    </View>
  );
};
