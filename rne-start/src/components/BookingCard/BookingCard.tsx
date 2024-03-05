import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { createStyles } from "./styles";

interface BookingCardProps {
  id: number;
  visible: boolean;
  handleClose: () => void;
}

export const BookingCard = ({
  id,
  visible = false,
  handleClose,
}: BookingCardProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const { t } = useTranslation();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.card}>
          <Text style={styles.title}>{`${id}`}</Text>
          <Text style={styles.text}>
            Тут будет подробная информация о слоте
          </Text>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.text}>закрыть</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
