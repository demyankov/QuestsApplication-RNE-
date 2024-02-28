import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import { createStyles } from "../Profile/styles";
import { MainStackParamsList } from "../../types";
import { useAppSelector, getQuestDetails } from "../../store";

export const QuestDetails = ({ route }: any) => {
  const quest = useAppSelector(getQuestDetails);
  const { params } = useRoute<RouteProp<MainStackParamsList>>();
  const theme = useTheme();
  const styles = createStyles(theme);

  console.log(quest);

  return (
    <View>
      <Text>{params?.questId}</Text>
    </View>
  );
};
