import { View, Text, TouchableHighlight } from 'react-native';
import { createStyles } from './styles';
import { useTheme } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { IQuestCard } from '../../types';
import { CustomButton } from '../CustomButton/CustomButton';
import { SCREENS } from '../../constants';
import { Image } from 'expo-image';
import { customQuestOptions } from '../../services';

export const Post = ({ card }: { card: IQuestCard }) => {
  const {
    id,
    title,
    shortDescription,
    image,
    genres,
    levelOfFear,
    difficultyLevel,
    contactLevel,
    teamSize,
    ageFrom,
    duration,
    interactive,
    location,
  } = card;
  const theme = useTheme();
  const styles = createStyles(theme);

  const levelOfFearlLine =
    levelOfFear && customQuestOptions({ value: +levelOfFear });
  const contactLevelLine =
    contactLevel && customQuestOptions({ value: +contactLevel });
  const difficultyLevelLine =
    difficultyLevel && customQuestOptions({ value: +difficultyLevel });

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
        <View style={styles.statisticsWrapper}>
          <View>
            {teamSize && (
              <View style={styles.statisticsItem}>
                <AntDesign name="team" size={24} color="yellow" />
                <Text>{teamSize}</Text>
              </View>
            )}
            {duration && (
              <View style={styles.statisticsItem}>
                <AntDesign name="hourglass" size={24} color="yellow" />
                <Text>{duration}</Text>
              </View>
            )}
            {ageFrom && (
              <View style={styles.statisticsItem}>
                <AntDesign name="smileo" size={24} color="yellow" />
                <Text>{ageFrom}</Text>
              </View>
            )}
          </View>
          <View>
            {/* {difficultyLevel && (
              <View style={styles.statisticsItem}>
                {<AntDesign name="lock" size={24} color="yellow" />}
              </View>
            )} */}
          </View>
        </View>
      </TouchableHighlight>
      <Text style={styles.title}>{title}</Text>
      <Text>{shortDescription}</Text>
      <CustomButton title="Подробнее" to={SCREENS.QUESTDETAILS} />
    </View>
  );
};
