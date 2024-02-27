import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { SCREENS } from '../../constants/screens';
import { useNavigation } from '@react-navigation/native';
import { MainStackType } from '../../types';

interface CustomButtonProps {
  title: string;
  to?: SCREENS;
}

export const CustomButton = ({ title, to }: CustomButtonProps) => {
  const { navigate } = useNavigation<MainStackType>();
  const navigateTo = () => to && navigate(to);

  return (
    <Pressable style={styles.button} onPress={navigateTo}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
