import { TouchableHighlight, Text, View } from "react-native";
import { Circle } from "react-native-svg";
import { CircleIcon } from "../CircleIcon/CircleIcon";
import { createStyles } from "./styles";
import { useNavigation, useTheme } from "@react-navigation/native";
import { MainStackType } from "../../types";
import { SCREENS } from "../../constants/screens";

export interface StatisticsItemProps {
  count?: string;
  iconColor: string;
  text: string;
  to: SCREENS;
}

export const StatisticsItem = ({
  count = "0",
  iconColor,
  text,
  to,
}: StatisticsItemProps) => {
  const { navigate } = useNavigation<MainStackType>();
  const theme = useTheme();
  const styles = createStyles(theme);

  const navigateTo = () => navigate(to);
  return (
    <TouchableHighlight
      onPress={navigateTo}
      style={styles.item}
      underlayColor="transparent"
    >
      <View style={styles.wrapper}>
        <CircleIcon color={iconColor} />
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};
