import { View, Text } from "react-native";
import { IPost } from "../../store";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";
import { scaleSize } from "../../utils";

interface PostProps {
  post: IPost;
}

export const Post = ({ post }: PostProps) => {
  const { title, text, date, likes, views } = post;
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.statisticsWrapper}>
        <View style={styles.statisticsItem}>
          <Icon
            name="heart-sharp"
            size={scaleSize(50)}
            color={theme.colors.text}
          />
          <Text style={styles.statisticsText}>{likes}</Text>
        </View>
        <View style={styles.statisticsItem}>
          <Icon name="eye" size={scaleSize(50)} color={theme.colors.text} />
          <Text style={styles.statisticsText}>{views}</Text>
        </View>
      </View>
    </View>
  );
};
