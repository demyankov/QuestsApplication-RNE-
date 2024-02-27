import { View, Text, TouchableHighlight } from "react-native";
import { createStyles } from "./styles";
import { useNavigation, useTheme } from "@react-navigation/native";
import { AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { IQuestCard, MainStackType } from "../../types";
import { CustomButton } from "../CustomButton/CustomButton";
import { SCREENS } from "../../constants";
import { Image } from "expo-image";
import { customQuestOptions } from "../../services";

export const QuestCard = ({ card }: { card: IQuestCard }) => {
  const { navigate } = useNavigation<MainStackType>();
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

  const levelOfFearlLine = customQuestOptions({ value: levelOfFear });
  const contactLevelLine = customQuestOptions({ value: contactLevel });
  const difficultyLevelLine = customQuestOptions({ value: difficultyLevel });

  const navigateTo = (to: any, options: any) => navigate(to, options);

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
        <View style={styles.statisticsWrapper}>
          <View style={styles.statisticsGroup}>
            {teamSize && (
              <View style={styles.statisticsItem}>
                <AntDesign name="team" size={24} color="yellow" />
                <Text style={styles.text}>{teamSize}</Text>
              </View>
            )}
            {duration && (
              <View style={styles.statisticsItem}>
                <AntDesign name="hourglass" size={24} color="yellow" />
                <Text style={styles.text}>{duration}</Text>
              </View>
            )}
            {ageFrom && (
              <View style={styles.statisticsItem}>
                <MaterialIcons name="child-care" size={24} color="yellow" />
                <Text style={styles.text}>{ageFrom}</Text>
              </View>
            )}
          </View>
          <View style={styles.statisticsGroup}>
            <View style={styles.statisticsItemSecondary}>
              {levelOfFearlLine.map((color, i) => (
                <AntDesign
                  name="aliwangwang-o1"
                  size={20}
                  color={color}
                  key={i}
                />
              ))}
            </View>
            <View style={styles.statisticsItemSecondary}>
              {difficultyLevelLine.map((color, i) => (
                <AntDesign name="lock" size={24} color={color} key={i} />
              ))}
            </View>
            <View style={styles.statisticsItemSecondary}>
              {contactLevelLine.map((color, i) => (
                <FontAwesome5
                  name="fist-raised"
                  size={24}
                  color={color}
                  key={i}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{shortDescription}</Text>
      <TouchableHighlight
        style={styles.text}
        onPress={() => navigateTo(SCREENS.QUESTDETAILS, { questId: id })}
      >
        <Text style={styles.text}>"Подробнее"</Text>
      </TouchableHighlight>
    </View>
  );
};
