import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { MainStackParamsList } from "../../types";
import {
  useAppSelector,
  getQuestDetails,
  useAppDispatch,
  clearCurrentQuest,
  toggleVisitedAction,
  getVisitedSelector,
  getQuestDetailsAction,
  getIsLoadingQuestDetails,
  getUserSelector,
  getFavoritesAction,
  clearFavorites,
  getUserReviewsAction,
  getQuestReviewsAction,
  clearReviews,
  getQuestReviewsSelector,
} from "../../store";
import { createStyles } from "./styles";
import {
  QuestsDetailsStatistics,
  Schedule,
  ToggleButton,
  DetailsTitle,
  Loader,
  CustomButton,
  ReviewsList,
} from "../../components";
import {} from "../../components";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { getFavoritesSelector } from "../../store";
import { toggleFavoritesAction } from "../../store/actions/toggleFavoritesAction";
import { ReviewForm } from "../../components";

export const QuestDetails = () => {
  const dispatch = useAppDispatch();
  const quest = useAppSelector(getQuestDetails);
  const favorites = useAppSelector(getFavoritesSelector);
  const visited = useAppSelector(getVisitedSelector);
  const reviews = useAppSelector(getQuestReviewsSelector);
  const isLoading = useAppSelector(getIsLoadingQuestDetails);
  const user = useAppSelector(getUserSelector);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

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
  const isVisited = visited.includes(id);

  const { params } = useRoute<RouteProp<MainStackParamsList>>();
  const theme = useTheme();
  const styles = createStyles(theme);

  const handleToggleFavorite = () => {
    dispatch(
      toggleFavoritesAction({
        collectionName: "favorites",
        docName: user.id,
        id,
        isInclude: isFavorite,
      })
    );
  };

  const handleToggleReviewModal = () => {
    const isAlreadyRated = reviews.find(({ userId }) => userId === user.id);
    isAlreadyRated
      ? alert("Вы уже оставляли отзыв на данный квест")
      : setIsReviewModalOpen(!isReviewModalOpen);
  };

  const handleToggleVisited = () =>
    dispatch(
      toggleVisitedAction({
        collectionName: "visited",
        docName: user.id,
        id,
        isInclude: isVisited,
      })
    );

  useEffect(() => {
    dispatch(
      getQuestDetailsAction({
        collectionName: "questsDetails",
        id: params.questId,
      })
    );

    return () => {
      dispatch(clearCurrentQuest());
    };
  }, []);

  useEffect(() => {
    dispatch(getQuestReviewsAction({ collectionName: "reviews", questId: id }));
    return () => {
      dispatch(clearReviews());
    };
  }, [id]);

  useEffect(() => {
    dispatch(
      getFavoritesAction({ collectionName: "favorites", docName: user.id })
    );
    return () => {
      dispatch(clearFavorites());
    };
  }, [user.id]);

  return isLoading ? (
    <Loader />
  ) : (
    <ScrollView>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/originals/ad/b7/fe/adb7fe55390b917de8d3670babd0d4ff.jpg",
        }}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ resizeMode: "repeat", opacity: 0.4 }}
      >
        <View style={styles.header}>
          <Image source={banner} style={styles.banner} />
          <Text style={[styles.name, styles.textShadow]}>{name}</Text>
          <Text style={[styles.genre, styles.textShadow]}>{mainGenre}</Text>
          <Text style={[styles.address, styles.textShadow]}>{location}</Text>
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
              handleClick={handleToggleVisited}
              clicked={isVisited}
            />
            <ToggleButton
              clicked={isFavorite}
              title="Избранное"
              familyIcon="Fontisto"
              iconName="favorite"
              handleClick={handleToggleFavorite}
            />
          </View>
          {(!!description.length || !!additionalDescription.length) && (
            <>
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
            </>
          )}
          {!!modes.length && (
            <>
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
            </>
          )}
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
          <>
            <DetailsTitle
              title="reviews"
              familyIcon="MaterialIcons"
              iconName="reviews"
            />
            <ReviewsList reviews={reviews} />
            {user.id && (
              <>
                <CustomButton
                  title="leaveReview"
                  familyIcon="Fontisto"
                  iconName="favorite"
                  handleClick={handleToggleReviewModal}
                />
                <ReviewForm
                  user={user}
                  quest={quest}
                  visible={isReviewModalOpen}
                  handleClose={handleToggleReviewModal}
                />
              </>
            )}
          </>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
