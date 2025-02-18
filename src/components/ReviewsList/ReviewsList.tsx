import { FlatList, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { IReview } from "../../types";
import { Review } from "../Review/Review";

interface IReviewsList {
  reviews: IReview[];
  handleDelete: (id: string) => void;
}

export const ReviewsList = ({ reviews, handleDelete }: IReviewsList) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  const isEmpty = !reviews.length;

  return isEmpty ? (
    <Text style={styles.text}>{t("noReviews")}</Text>
  ) : (
    <FlatList
      contentContainerStyle={styles.wrapper}
      data={reviews}
      renderItem={({ item }) => (
        <Review review={item} handleDelete={handleDelete} />
      )}
      keyExtractor={(review) => review.id}
      horizontal
      nestedScrollEnabled
    />
  );
};
