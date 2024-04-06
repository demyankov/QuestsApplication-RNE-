import { ImageBackground } from "expo-image";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import {
  getUserIdSelector,
  getUserReviewsAction,
  getUserReviewsSelector,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { Review } from "../../components/Review/Review";

export const Reviews = () => {
  const reviews = useAppSelector(getUserReviewsSelector);
  const userId = useAppSelector(getUserIdSelector);
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(getUserReviewsAction({ collectionName: "reviews", userId }));
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.wrapper}
        source={require("../../assets/bg.jpg")}
        imageStyle={{ resizeMode: "cover", opacity: 0.4 }}
      >
        <FlatList
          contentContainerStyle={styles.reviews}
          data={reviews}
          renderItem={({ item }) => <Review review={item} />}
          keyExtractor={(review) => review.id}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
