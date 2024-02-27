import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import { createStyles } from "../Profile/styles";

export const QuestDetails = ({ route }: any) => {
  const { questId } = route.params;

  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View>
      <Text>{questId}</Text>
    </View>
  );
};
