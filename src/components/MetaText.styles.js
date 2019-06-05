import { StyleSheet } from 'react-native';
import { parameters } from '../utils';

export const styles = () => {
  const base = {
    container: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
      marginVertical: 12
    },
    text: {
      fontFamily: 'Exo2-Medium',
      fontSize: 13,
      fontWeight: '500',
      fontStyle: 'normal',
      lineHeight: 16,
      letterSpacing: 0,
      textAlign: 'left',
      color: 'rgb(239, 239, 239)'
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};
