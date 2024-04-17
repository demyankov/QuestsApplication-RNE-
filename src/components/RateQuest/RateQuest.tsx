import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

import { createStyles } from "./styles";

import { Entypo } from "@expo/vector-icons";
import { getRateArray } from "../../services";
import { scaleSize } from "../../utils";

interface RateQuestProps {
  rate: number;
  handleRate: (rate: number) => void;
}

export const RateQuest = ({ rate, handleRate }: RateQuestProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const { t } = useTranslation();

  const rateArray = getRateArray(rate);

  return (
    <View>
      <Text style={styles.text}>{t("rateGame")}</Text>
      <View style={styles.rateWrapper}>
        {rateArray.map((isChecked, i) =>
          isChecked ? (
            <Pressable key={i}>
              <Entypo
                name="star"
                size={scaleSize(60)}
                color="yellow"
                onPress={() => handleRate(i + 1)}
              />
            </Pressable>
          ) : (
            <Pressable key={i}>
              <Entypo
                name="star-outlined"
                size={scaleSize(60)}
                color={theme.colors.text}
                onPress={() => handleRate(i + 1)}
              />
            </Pressable>
          )
        )}
      </View>
    </View>
  );
};
