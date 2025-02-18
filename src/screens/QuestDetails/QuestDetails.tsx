import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { MainStackParamsList } from "../../types";
import * as Localization from "expo-localization";
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
  getQuestReviewsAction,
  clearReviews,
  getQuestReviewsSelector,
  getIsLoadinQuestDetailsMessage,
  deleteReviewAction,
  getIsAuthSelector,
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
import { ToastOptions, useToast } from "react-native-toast-notifications";
import { useTranslation } from "react-i18next";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { SCREENS } from "../../constants";

export const QuestDetails = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const quest = useAppSelector(getQuestDetails);
  const favorites = useAppSelector(getFavoritesSelector);
  const visited = useAppSelector(getVisitedSelector);
  const reviews = useAppSelector(getQuestReviewsSelector);
  const isLoading = useAppSelector(getIsLoadingQuestDetails);
  const language = Localization.locale.substring(0, 2);
  const user = useAppSelector(getUserSelector);
  const isAuth = useAppSelector(getIsAuthSelector);
  const { t } = useTranslation();
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const errorMessage = useAppSelector(getIsLoadinQuestDetailsMessage);

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

  console.log(user);
  console.log(isAuth);

  const collection = language === "en" ? "questDetailsEn" : "questsDetails";
  const isFavorite = favorites.includes(id);
  const isVisited = visited.includes(id);

  const { params } = useRoute<RouteProp<MainStackParamsList>>();
  const theme = useTheme();
  const styles = createStyles(theme);

  const showMessage = (text: string, type: ToastOptions["type"]) =>
    toast.show(t(text), {
      type: type,
      placement: "top",
      animationType: "slide-in",
      icon:
        type === "success" ? (
          <FontAwesome6 name="face-smile-wink" size={24} color="#fff" />
        ) : (
          <FontAwesome name="hand-stop-o" size={24} color="#fff" />
        ),
    });

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
      ? showMessage("reviewExist", "danger")
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

  const handleDelete = async (id: string) => {
    try {
      await dispatch(
        deleteReviewAction({
          collectionName: "reviews",
          id,
          userId: user.id,
        })
      );

      await dispatch(
        getQuestReviewsAction({
          collectionName: "reviews",
          questId: quest.id,
        })
      );

      showMessage("Отзыв успешно удален", "success");
    } catch {
      showMessage("Ошибка удаления отзыва", "danger");
    }
  };

  useEffect(() => {
    dispatch(
      getQuestDetailsAction({
        collectionName: collection,
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

  useEffect(() => {
    errorMessage && showMessage(errorMessage, "danger");
  }, [errorMessage]);

  const uri =
    "https://i.pinimg.com/originals/ad/b7/fe/adb7fe55390b917de8d3670babd0d4ff.jpg";

  return isLoading ? (
    <Loader />
  ) : (
    <ScrollView>
      <ImageBackground
        source={{ uri }}
        resizeMode="cover"
        style={styles.wrapper}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.header}>
          <Image source={banner} style={styles.banner} />
          <Text style={[styles.name, styles.textShadow]}>{name}</Text>
          <Text style={[styles.genre, styles.textShadow]}>{mainGenre}</Text>
          <Text style={[styles.address, styles.textShadow]}>{location}</Text>
        </View>
        <View style={styles.container}>
          <DetailsTitle
            title="aboutQuest"
            familyIcon="AntDesign"
            iconName="tagso"
          />
          <QuestsDetailsStatistics quest={quest} />
          {isAuth && (
            <View style={styles.buttonsWrapper}>
              <ToggleButton
                title="passed"
                familyIcon="Entypo"
                iconName="check"
                handleClick={handleToggleVisited}
                clicked={isVisited}
              />
              <ToggleButton
                clicked={isFavorite}
                title="favorite"
                familyIcon="Fontisto"
                iconName="favorite"
                handleClick={handleToggleFavorite}
              />
            </View>
          )}
          {(!!description.length || !!additionalDescription.length) && (
            <>
              <DetailsTitle
                title="description"
                familyIcon="MaterialIcons"
                iconName="description"
              />
              {description?.map((item: string, i: number) => (
                <Text style={styles.text} key={i}>
                  {item}
                </Text>
              ))}
              <Text style={styles.title}>
                {t(`${SCREENS.QUESTDETAILS}.additionalTerms`)}
              </Text>
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
                title="gameModes"
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
            title="bookedQuest"
            familyIcon="MaterialCommunityIcons"
            iconName="book-edit-outline"
          />
          {apiPath && <Schedule apiPath={apiPath} />}
          <DetailsTitle
            title="address"
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
            <ReviewsList reviews={reviews} handleDelete={handleDelete} />
            {user.id && (
              <>
                <CustomButton
                  title="buttons.leaveReview"
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
