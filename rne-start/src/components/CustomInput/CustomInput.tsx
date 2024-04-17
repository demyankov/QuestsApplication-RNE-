import { Controller } from "react-hook-form";
import { createStyles } from "./styles";
import { Text, TextInput, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";

interface CustomInputProps {
  label?: string;
  name: string;
  error: string | undefined;
  secure?: boolean;
  control: any;
  numberOfLines?: number;
  placeholder?: string;
}

export const CustomInput = ({
  label = "",
  name,
  error,
  control,
  secure = false,
  placeholder = "",
  numberOfLines = 1,
  ...otherProps
}: CustomInputProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  const inputStyles = [styles.input, numberOfLines > 1 && styles.teatArea];
  const gradient = ["#414042", "#1e1e1f", "#1e1e1f", "#414042"];

  return (
    <View style={styles.inputWrapper}>
      {label && <Text style={styles.label}>{t(label)}</Text>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <LinearGradient
            colors={gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TextInput
              style={inputStyles}
              placeholder={placeholder}
              secureTextEntry={secure}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline={numberOfLines > 1}
              numberOfLines={numberOfLines}
              {...otherProps}
            />
          </LinearGradient>
        )}
      />
      {error && (
        <View style={styles.warningWrapper}>
          <AntDesign name="warning" size={12} color="#FFAA00" />
          <Text style={styles.warningText}>{error}</Text>
        </View>
      )}
    </View>
  );
};
