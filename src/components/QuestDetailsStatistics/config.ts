import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { IQuest } from "../../types";
import { Theme } from "@react-navigation/native";

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

export const getConfig = (quest: IQuest, theme: Theme, t): IConfig[] => {
  const {
    levelOfFear,
    difficultyLevel,
    contactLevel,
    teamSize,
    ageFrom,
    duration,
    interactive,
  } = quest;
  return [
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
      text: t("interactive"),
      visibility: interactive,
    },
    {
      icon: AntDesign,
      name: "aliwangwang-o1",
      size: 22,
      color: theme.colors.text,
      text: `${t("fear")}: ${levelOfFear}/5`,
      visibility: !!levelOfFear,
    },
    {
      icon: AntDesign,
      name: "lock",
      size: 22,
      color: theme.colors.text,
      text: `${t("difficulty")}: ${difficultyLevel}/5`,
      visibility: !!difficultyLevel,
    },
    {
      icon: FontAwesome5,
      name: "fist-raised",
      size: 22,
      color: theme.colors.text,
      text: `${t("contact")}: ${contactLevel}/5`,
      visibility: !!contactLevel,
    },
  ];
};
