import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { changeUserName, useAppDispatch } from "../../store";

export const Settings = () => {
  const dispatch = useAppDispatch();

  const handleInput = (text: any) => dispatch(changeUserName(text));

  return (
    <View style={styles.wrapper}>
      <Text>Настройки личных данных</Text>
      <TextInput
        placeholder="введите имя"
        onChangeText={handleInput}
      ></TextInput>
    </View>
  );
};
