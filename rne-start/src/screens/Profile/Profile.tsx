import { ImageBackground } from "react-native";
import { createStyles } from "./styles";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { ProfileStatistics, User, CustomLink, Loader } from "../../components";
import { SCREENS } from "../../constants/screens";
import { useTranslation } from "react-i18next";
import {
  clearFavorites,
  clearReviews,
  clearVisited,
  getFavoritesAction,
  getIsFavoritesLoadingSelector,
  getIsVisitedLoadingSelector,
  getUserIdSelector,
  getUserReviewsAction,
  getVisitedAction,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { useCallback, useEffect } from "react";

export const Profile = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();
  const userId = useAppSelector(getUserIdSelector);
  const dispatch = useAppDispatch();

  const isLoadingFavorites = useAppSelector(getIsFavoritesLoadingSelector);
  const isLoadingVisited = useAppSelector(getIsVisitedLoadingSelector);

  const isLoading = isLoadingFavorites || isLoadingVisited;

  useFocusEffect(
    useCallback(() => {
      dispatch(
        getFavoritesAction({ collectionName: "favorites", docName: userId })
      );
      dispatch(
        getVisitedAction({ collectionName: "visited", docName: userId })
      );
      dispatch(getUserReviewsAction({ collectionName: "reviews", userId }));
    }, [userId])
  );

  useEffect(() => {
    console.log("userId", userId);
    return () => {
      clearReviews();
      clearFavorites();
      clearVisited();
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <ImageBackground
      source={require("../../assets/bg.jpg")}
      style={styles.wrapper}
      imageStyle={{ resizeMode: "stretch", opacity: 0.4 }}
    >
      <User />
      <ProfileStatistics />
      <CustomLink title={t("settings")} to={SCREENS.SETTINGS} />
      <CustomLink title={t("history")} to={SCREENS.HISTORY} />
    </ImageBackground>
  );
};
