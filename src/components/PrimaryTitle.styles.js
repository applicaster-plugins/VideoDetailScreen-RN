import { StyleSheet } from 'react-native';
import { parameters, layout } from '../utils';

export const styles = () => {
  const base = {
    container: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
      marginVertical: 4
    },
    text: {
      fontSize: 24,
      lineHeight: 28,
      letterSpacing: layout.isPhone ? 0 : -0.48,
      textAlign: 'left',
      color: 'rgb(239, 239, 239)',
      fontFamily: 'Exo2-SemiBold'
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};
