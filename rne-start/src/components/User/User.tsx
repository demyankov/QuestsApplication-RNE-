import { View, Text } from "react-native";
import { UserIcon } from "../UserIcon/UserIcon";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";
import { getUserSelector, useAppSelector } from "../../store";
import { getAge } from "../../utils";

export const User = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const user = useAppSelector(getUserSelector);

  return (
    <View style={styles.wrapper}>
      <UserIcon />
      <View style={styles.about}>
        <Text style={styles.name}>
          {user.firstName} {user.secondName}
        </Text>
        <Text style={styles.age}>{getAge(user.age)}</Text>
        <Text style={styles.location}>{user.location}</Text>
      </View>
    </View>
  );
};
