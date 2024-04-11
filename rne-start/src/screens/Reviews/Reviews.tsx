import { ImageBackground } from "expo-image";
import { FlatList, SafeAreaView, Text } from "react-native";
import { createStyles } from "./styles";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useCallback } from "react";
import {
  deleteReviewAction,
  getIsReviewsLoadingSelector,
  getUserIdSelector,
  getUserReviewsAction,
  getUserReviewsSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { Review } from "../../components/Review/Review";
import { useTranslation } from "react-i18next";
import { Loader } from "../../components";
import { useToast } from "react-native-toast-notifications";
import { FontAwesome6 } from "@expo/vector-icons";

export const Reviews = () => {
  const reviews = useAppSelector(getUserReviewsSelector);
  const userId = useAppSelector(getUserIdSelector);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const toast = useToast();

  const theme = useTheme();
  const styles = createStyles(theme);

  const isLoading = useAppSelector(getIsReviewsLoadingSelector);
  const isNoReviews = !reviews.length;

  const handleDelete = async (id: string) => {
    try {
      await dispatch(
        deleteReviewAction({
          collectionName: "reviews",
          id,
          userId,
        })
      );

      toast.show(t("Отзыв успешно удален"), {
        type: "success",
        placement: "top",
        animationType: "slide-in",
        icon: <FontAwesome6 name="face-smile-wink" size={24} color="#fff" />,
      });

      await dispatch(
        getUserReviewsAction({ collectionName: "reviews", userId })
      );
    } catch {
      toast.show(t("Ошибка удаления отзыва"), {
        type: "danger",
        placement: "top",
        animationType: "slide-in",
        icon: <FontAwesome6 name="face-smile-wink" size={24} color="#fff" />,
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getUserReviewsAction({ collectionName: "reviews", userId }));
    }, [])
  );

  return isLoading ? (
    <Loader />
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.wrapper}
        source={require("../../assets/bg.jpg")}
        imageStyle={{ resizeMode: "cover", opacity: 0.4 }}
      >
        {isNoReviews && <Text style={styles.text}>{t("noReviews")}</Text>}
        <FlatList
          contentContainerStyle={styles.reviews}
          data={reviews}
          renderItem={({ item }) => (
            <Review review={item} handleDelete={handleDelete} />
          )}
          keyExtractor={(review) => review.id}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
