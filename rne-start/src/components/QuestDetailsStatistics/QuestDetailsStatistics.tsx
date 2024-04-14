import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { getConfig } from "./config";
import { IQuest } from "../../types";

export const QuestsDetailsStatistics = ({ quest }: { quest: IQuest }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  const config = getConfig(quest, theme, t);

  return (
    <View style={styles.wrapper}>
      {config.map(({ icon, name, size, color, text, visibility }, i) => {
        const Icon = icon;
        return (
          visibility && (
            <View style={styles.statisticsItem} key={i}>
              <Icon name={name} size={size} color="yellow" />
              <Text style={styles.text}>{text}</Text>
            </View>
          )
        );
      })}
    </View>
  );
};
