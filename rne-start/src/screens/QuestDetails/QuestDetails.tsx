import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { MainStackParamsList } from "../../types";
import { useAppSelector, getQuestDetails } from "../../store";
import { createStyles } from "./styles";
import {
  QuestsDetailsStatistics,
  Schedule,
  ToggleButton,
} from "../../components";
import { DetailsTitle } from "../../components/DetailsTitle/DetailsTitle";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";

export const QuestDetails = () => {
  const quest = useAppSelector(getQuestDetails);

  const { t } = useTranslation();

  const {
    name,
    mainGenre,
    location,
    banner,
    description,
    additionalDescription,
    modes,
  } = quest;

  const { params } = useRoute<RouteProp<MainStackParamsList>>();
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <ScrollView>
      <View style={styles.header}>
        <Image source={banner} style={styles.banner} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.genre}>{mainGenre}</Text>
        <Text style={styles.address}>{location}</Text>
      </View>
      <View style={styles.container}>
        <DetailsTitle
          title="Кратко о квесте"
          familyIcon="AntDesign"
          iconName="tagso"
        />
        <QuestsDetailsStatistics quest={quest} />
        <View style={styles.buttonsWrapper}>
          <ToggleButton
            title="Квест пройден"
            familyIcon="Entypo"
            iconName="check"
            handleClick={() => {}}
            clicked
          />
          <ToggleButton
            title="Избранное"
            familyIcon="Fontisto"
            iconName="favorite"
            handleClick={() => {}}
          />
        </View>
        <DetailsTitle
          title="Описание"
          familyIcon="MaterialIcons"
          iconName="description"
        />
        {description.map((item: string, i: number) => (
          <Text style={styles.text} key={i}>
            {item}
          </Text>
        ))}
        <Text style={styles.title}>Дополнительные условия</Text>
        {additionalDescription.map((item: string, i: number) => (
          <Text style={styles.text} key={i}>
            {item}
          </Text>
        ))}
        <DetailsTitle
          title="Режимы игры"
          familyIcon="FontAwesome5"
          iconName="fist-raised"
        />
        {modes.map((item: string, i: number) => (
          <Text style={styles.text} key={i}>
            {item}
          </Text>
        ))}
        <DetailsTitle
          title="Забронировать квест"
          familyIcon="MaterialCommunityIcons"
          iconName="book-edit-outline"
        />
        <Schedule />
        <DetailsTitle
          title="Как добраться"
          familyIcon="Entypo"
          iconName="address"
        />
      </View>
    </ScrollView>
  );
};
