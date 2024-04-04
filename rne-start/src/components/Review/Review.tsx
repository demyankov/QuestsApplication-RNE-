import { View, Text } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { scaleSize } from "../../utils";
import { IReview } from "../../types";

interface ReviewProps {
  review: IReview;
}

export const Review = ({ review }: ReviewProps) => {
  const { questName, reviewText, dateOfReview, userName, rate } = review;
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{questName}</Text>
      <Text style={styles.date}>{dateOfReview}</Text>
      <Text style={styles.text}>{reviewText}</Text>
      <Text style={styles.name}>{userName}</Text>
      <View style={styles.statisticsItem}>
        <MaterialIcons name="star-rate" size={scaleSize(50)} color={"yellow"} />
        <Text style={styles.statisticsText}>{rate}</Text>
      </View>
    </View>
  );
};
