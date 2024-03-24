import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { MainStackParamsList } from "../../types";
import {
  useAppSelector,
  getQuestDetails,
  useAppDispatch,
  setCurrentQuest,
  clearCurrentQuest,
  toggleFavorite,
} from "../../store";
import { createStyles } from "./styles";
import {
  QuestsDetailsStatistics,
  Schedule,
  ToggleButton,
  DetailsTitle,
  Loader,
} from "../../components";
import {} from "../../components";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getFavoritesSelector } from "../../store";

export const QuestDetails = () => {
  const dispatch = useAppDispatch();
  const quest = useAppSelector(getQuestDetails);
  const favorites = useAppSelector(getFavoritesSelector);

  const { t } = useTranslation();

  const {
    id,
    name,
    mainGenre,
    location,
    banner,
    description,
    additionalDescription,
    modes,
    apiPath,
  } = quest;

  const isFavorite = favorites.includes(id);

  const { params } = useRoute<RouteProp<MainStackParamsList>>();
  const theme = useTheme();
  const styles = createStyles(theme);

  const handleToggleFavorite = () => dispatch(toggleFavorite(id));

  useEffect(() => {
    dispatch(setCurrentQuest(params.questId));
    return () => {
      dispatch(clearCurrentQuest());
    };
  }, [params.questId]);

  return (
    <ScrollView>
      <Loader />
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
            clicked={isFavorite}
            title="Избранное"
            familyIcon="Fontisto"
            iconName="favorite"
            handleClick={handleToggleFavorite}
          />
        </View>
        <DetailsTitle
          title="Описание"
          familyIcon="MaterialIcons"
          iconName="description"
        />
        {description?.map((item: string, i: number) => (
          <Text style={styles.text} key={i}>
            {item}
          </Text>
        ))}
        <Text style={styles.title}>Дополнительные условия</Text>
        {additionalDescription?.map((item: string, i: number) => (
          <Text style={styles.text} key={i}>
            {item}
          </Text>
        ))}
        <DetailsTitle
          title="Режимы игры"
          familyIcon="FontAwesome5"
          iconName="fist-raised"
        />
        {modes?.map((item: string, i: number) => (
          <Text style={styles.text} key={i}>
            {item}
          </Text>
        ))}
        <DetailsTitle
          title="Забронировать квест"
          familyIcon="MaterialCommunityIcons"
          iconName="book-edit-outline"
        />
        {apiPath && <Schedule apiPath={apiPath} />}
        <DetailsTitle
          title="Как добраться"
          familyIcon="Entypo"
          iconName="address"
        />
        <Text style={styles.text}>{location}</Text>
      </View>
    </ScrollView>
  );
};
