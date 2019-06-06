import { StyleSheet } from 'react-native';
import { parameters } from '../utils';

export const styles = () => {
  const base = {
    container: {
      flexDirection: 'row',
      height: 78
    },
    imageBox: {
      width: 139,
      height: 78
    },
    image: {
      width: 139,
      height: 78,
      resizeMode: 'cover'
    },
    label: {
      overflow: 'hidden',
      padding: 7,
      textAlign: 'center',
      color: 'rgb(255,255,255)',
      fontFamily: 'Exo2-Light',
      fontSize: 9,
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(231, 199, 108, .7)'
    },
    infoBox: {
      marginLeft: 10,
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },
    dateTime: {
      fontFamily: 'Exo2-Light',
      fontSize: 13,
      lineHeight: 16,
      letterSpacing: 0,
      color: 'rgb(127, 127, 127)'
    },
    title: {
      fontFamily: 'Exo2-SemiBold',
      fontSize: 14,
      lineHeight: 18,
      letterSpacing: 0,
      color: 'rgb(255,255,255)'
    },
    sectionLabel: {
      fontFamily: 'Exo2-Light',
      fontSize: 12,
      lineHeight: 12,
      letterSpacing: -0.4,
      color: 'rgb(20, 84, 232)'
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};
