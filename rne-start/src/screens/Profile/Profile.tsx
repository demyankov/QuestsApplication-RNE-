import { ImageBackground } from "react-native";
import { createStyles } from "./styles";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import {
  ProfileStatistics,
  User,
  FavoritesQuestsList,
  CustomLink,
  Loader,
} from "../../components";
import { SCREENS } from "../../constants/screens";
import { useTranslation } from "react-i18next";
import {
  getFavoritesAction,
  getIsFavoritesLoadingSelector,
  getIsVisitedLoadingSelector,
  getUserSelector,
  getVisitedAction,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { useCallback, useEffect } from "react";

export const Profile = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();
  const { id } = useAppSelector(getUserSelector);
  const dispatch = useAppDispatch();

  const isLoadingFavorites = useAppSelector(getIsFavoritesLoadingSelector);
  const isLoadingVisited = useAppSelector(getIsVisitedLoadingSelector);

  const isLoading = isLoadingFavorites || isLoadingVisited;

  useFocusEffect(
    useCallback(() => {
      dispatch(
        getFavoritesAction({ collectionName: "favorites", docName: id })
      );
      dispatch(getVisitedAction({ collectionName: "visited", docName: id }));
    }, [])
  );

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
      <FavoritesQuestsList />
    </ImageBackground>
  );
};
