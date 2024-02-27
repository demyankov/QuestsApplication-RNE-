import { StyleSheet } from 'react-native';
import { scaleSize } from '../../utils';
import { Theme } from '@react-navigation/native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    inputWrapper: {
      position: 'relative',

      //     &:hover {
      //       border: 1px solid var(--background-color-button-secondary);
      //     }

      //     &:active,
      //     &:focus-within {
      //       border: 1px solid var(--background-color-button-secondary);
      //     }

      //     &:disabled input {
      //       color: var(--font-color-disabled);
      //     }
      //   }
    },

    input: {
      minWidth: '100%',
      margin: 0,
      paddingVertical: scaleSize(16),
      paddingHorizontal: scaleSize(20),
      backgroundColor: theme.colors.inputBackground,
      borderRadius: scaleSize(10),
      borderColor: theme.colors.inputBorder,
      borderWidth: 1,
      color: theme.colors.text,    },

    label: {
      color: theme.colors.text,
      marginBottom: scaleSize(5),
    },

    warningInput: {
      backgroundColor: '#f8f1e4',
      borderWidth: 1,
      borderColor: '#FFAA00',
    },

    warningText: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      transform: [{ translateY: scaleSize(30) }],
      zIndex: 10,
      display: 'flex',
      gap: scaleSize(10),
      alignItems: 'center',
      fontSize: scaleSize(25),
      color: '#FFAA00',
      // whiteSpace: 'nowrap',
    },
  });
