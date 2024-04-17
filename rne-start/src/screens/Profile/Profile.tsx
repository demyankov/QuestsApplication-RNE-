import { ImageBackground } from "react-native";
import { useCallback, useEffect } from "react";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { createStyles } from "./styles";

import {
  ProfileStatistics,
  User,
  CustomLink,
  Loader,
  CustomButton,
} from "../../components";
import { SCREENS } from "../../constants/screens";

import {
  clearFavorites,
  clearReviews,
  clearUser,
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
import { auth } from "../../firebase";
import { MainStackType } from "../../types";

export const Profile = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();
  const userId = useAppSelector(getUserIdSelector);
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<MainStackType>();

  const isLoadingFavorites = useAppSelector(getIsFavoritesLoadingSelector);
  const isLoadingVisited = useAppSelector(getIsVisitedLoadingSelector);

  const isLoading = isLoadingFavorites || isLoadingVisited;

  const handleQuit = async () => {
    try {
      await auth.signOut();
      dispatch(clearUser());
      dispatch(clearVisited());
      dispatch(clearReviews());
      dispatch(clearFavorites());
      navigate(SCREENS.MAIN);
    } catch (error) {
      navigate(SCREENS.MAIN);
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(
        getFavoritesAction({ collectionName: "favorites", docName: userId })
      );
      dispatch(
        getVisitedAction({ collectionName: "visited", docName: userId })
      );
      dispatch(getUserReviewsAction({ collectionName: "reviews", userId }));
    }, [])
  );

  useEffect(() => {
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
      <CustomButton
        title={t("quit")}
        handleClick={handleQuit}
        familyIcon="AntDesign"
        iconName="export"
        iconEnd
      />
      <CustomLink title={t("history")} to={SCREENS.HISTORY} />
    </ImageBackground>
  );
};
