import { StyleSheet } from 'react-native';
import { type Theme } from '@react-navigation/native';
import { scaleSize } from '../../utils';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.card,
      borderRadius: scaleSize(8),
      padding: scaleSize(20),
      width: scaleSize(600),
      maxHeight: scaleSize(500),
    },
    statisticsWrapper: {},
    title: {
      color: theme.colors.text,
      fontSize: scaleSize(40),
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      height: scaleSize(400),
      overflow: 'hidden',
      borderRadius: scaleSize(25),
    },
    image: {},
    statisticsItem: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: scaleSize(25),
    },
    text: {
      marginHorizontal: 'auto',
      fontSize: scaleSize(35),
      marginBottom: scaleSize(25),
      color: theme.colors.text,
    },
  });
