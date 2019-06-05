import { StyleSheet } from 'react-native';
import { parameters } from '../utils';

export const styles = () => {
  const base = {
    container: {
      marginTop: 12,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '99%'
    },
    text: {
      fontFamily: 'Exo2-Regular',
      fontSize: 15,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 22,
      letterSpacing: 0,
      textAlign: 'left',
      color: 'rgb(135,136,147)'
    },
    toggle: {
      fontFamily: 'Exo2-Regular',
      fontSize: 15,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 22,
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
