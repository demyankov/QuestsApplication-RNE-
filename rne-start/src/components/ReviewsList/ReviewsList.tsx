import { FlatList, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { IReview } from "../../types";
import { Review } from "../Review/Review";

interface IReviewsList {
  reviews: IReview[];
}

export const ReviewsList = ({ reviews }: IReviewsList) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  return (
    <FlatList
      contentContainerStyle={styles.wrapper}
      data={reviews}
      renderItem={({ item }) => <Review review={item} />}
      keyExtractor={(review) => review.id}
      horizontal
      nestedScrollEnabled
    />
  );
};
