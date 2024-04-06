import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { createStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { AntDesign } from "@expo/vector-icons";

interface CustomSelectProps {
  options: string[];
  onSelect: (item: string) => void;
  error?: string;
}

export const CustomSelect = ({
  options,
  onSelect,
  error = "",
}: CustomSelectProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const { t } = useTranslation();

  return (
    <View style={styles.selectWrapper}>
      <Text style={styles.selectTitle}>{t("chooseTariff")}</Text>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem) => {
          onSelect(selectedItem);
        }}
        defaultButtonText={t("notChosen")}
        buttonStyle={styles.select}
        buttonTextStyle={styles.selectText}
        dropdownStyle={styles.selectDropdown}
        rowStyle={styles.selectRow}
        rowTextStyle={styles.selectRowText}
      />
      {error && (
        <View style={styles.warningWrapper}>
          <AntDesign name="warning" size={12} color="#FFAA00" />
          <Text style={styles.warningText}>{t(`errors.${error}`)}</Text>
        </View>
      )}
    </View>
  );
};
