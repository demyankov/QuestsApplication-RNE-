import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import { Image, ImageProps } from "expo-image";

interface AvatarProps extends ImageProps {
  onPress?: () => void;
  img: string;
}

export const Avatar = ({ onPress, img, ...props }: AvatarProps) => (
  <View style={styles.avatarWrapper}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Image style={styles.avatar} source={img} {...props} />
    </TouchableWithoutFeedback>
  </View>
);
