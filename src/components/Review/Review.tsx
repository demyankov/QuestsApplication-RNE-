import { View, Text, TouchableOpacity } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { scaleSize } from "../../utils";
import { IReview } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import { getUserIdSelector, useAppSelector } from "../../store";

interface ReviewProps {
  review: IReview;
  handleDelete: (id: string) => void;
}

export const Review = ({ review, handleDelete }: ReviewProps) => {
  const { questName, reviewText, dateOfReview, userName, rate, userId, id } =
    review;
  const currentUserId = useAppSelector(getUserIdSelector);
  const theme = useTheme();
  const styles = createStyles(theme);
  const gradient = ["#414042", "#1e1e1f", "#414042"];

  const isOwner = currentUserId === userId;

  return (
    <LinearGradient
      colors={gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.wrapper}
    >
      <Text style={styles.title}>{questName}</Text>
      <Text style={styles.date}>{dateOfReview}</Text>
      <Text style={styles.text}>{reviewText}</Text>
      <Text style={styles.name}>{userName}</Text>
      <View style={styles.statisticsItem}>
        <MaterialIcons name="star-rate" size={scaleSize(50)} color={"yellow"} />
        <Text style={styles.statisticsText}>{rate}</Text>
      </View>
      {isOwner && (
        <TouchableOpacity
          style={styles.deleteIcon}
          onPress={() => handleDelete(id)}
        >
          <MaterialIcons
            name="delete-forever"
            size={scaleSize(50)}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};
