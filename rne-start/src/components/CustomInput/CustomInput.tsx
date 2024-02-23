import { Controller } from 'react-hook-form';
import { createStyles } from './styles';
import { Text, TextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MaskedTextInput } from 'react-native-mask-text';

interface CustomInputProps {
  label?: string;
  name: string;
  error: string | undefined;
  control: any;
  placeholder?: string;
}

export const CustomInput = ({
  label = '',
  name,
  error,
  control,
  placeholder = '',
  ...otherProps
}: CustomInputProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.inputWrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <MaskedTextInput
            mask="029 999-99-99"
            style={styles.input}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...otherProps}
          />
        )}
      />
      {error && <Text style={styles.warningText}>{error}</Text>}
    </View>
  );
};
