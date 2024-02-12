import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./styles";
import { getUserSelector, useAppSelector } from "../../store";
import { getAge } from "../../utils";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";

export const User = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const user = useAppSelector(getUserSelector);
  const [isAvatarIncrease, setIsAvatarIncrease] = useState(false);

  const toggleAvatar = () => setIsAvatarIncrease(!isAvatarIncrease);
  console.log(user);
  return (
    <View style={styles.wrapper}>
      <Avatar onPress={toggleAvatar} img={user.avatar} transition={500} />
      <Modal animationType="fade" transparent={true} visible={isAvatarIncrease}>
        <TouchableOpacity style={styles.centeredView} onPress={toggleAvatar}>
          <View style={styles.modalView}>
            <Avatar
              style={styles.avatarScale}
              onPress={toggleAvatar}
              img={user.avatar}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
