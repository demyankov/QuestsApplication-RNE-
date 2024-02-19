import { Controller } from "react-hook-form";
import { styles } from "./styles";
import { Text, TextInput, View } from "react-native";

interface CustomInputProps {
  label?: string;
  name: string;
  error: string | undefined;
  control: any;
  placeholder?: string;
}

export const CustomInput = ({
  label = "",
  name,
  error,
  control,
  placeholder = "",
  ...otherProps
}: CustomInputProps) => (
  <View>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          //   {...otherProps}
        />
      )}
    />
    {error && <Text>{error}</Text>}
  </View>
);
