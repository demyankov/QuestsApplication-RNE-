import { Text, View } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { IconComponentMap, IconNameMap } from "../../types";
import { useTranslation } from "react-i18next";

export type DetailsTitleProps<F extends keyof typeof IconComponentMap> = {
  title: string;
  familyIcon?: F;
  iconName?: IconNameMap[F];
  size?: number;
};

export const DetailsTitle = <F extends keyof typeof IconComponentMap>({
  title,
  familyIcon,
  iconName,
  size = 28,
}: DetailsTitleProps<F>) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  const Icon: JSX.ElementType =
    (familyIcon && IconComponentMap[familyIcon]) || AntDesign;

  return (
    <View style={styles.titleItem}>
      <Icon name={iconName} size={size} color={theme.colors.text} />
      <Text style={styles.title}>{t(title)}</Text>
    </View>
  );
};
