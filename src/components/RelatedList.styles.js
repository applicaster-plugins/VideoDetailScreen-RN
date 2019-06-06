import { StyleSheet } from 'react-native';
import { parameters, layout } from '../utils';

export const styles = () => {
  const base = {
    container: {},
    title: {
      fontFamily: 'Exo2-SemiBold',
      fontSize: layout.isPhone ? 20 : 24,
      lineHeight: layout.isPhone ? 26 : 32,
      color: 'rgb(255, 255, 255)',
      marginBottom: 20,
      letterSpacing: layout.isPhone ? -0.4 : -0.48
    },
    loader: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    teaser: {
      marginBottom: 24
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};
