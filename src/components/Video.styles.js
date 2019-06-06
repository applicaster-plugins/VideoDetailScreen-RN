import { StyleSheet } from 'react-native';
import { parameters } from '../utils';

export const styles = () => {
  const base = {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: 'rgb(2, 2, 2)'
    },
    image: {
      resizeMode: 'cover'
    },
    play: {
      position: 'absolute',
      width: 30,
      height: 30,
      zIndex: 200
    },
    label: {
      position: 'absolute',
      zIndex: 0,
      right: 0,
      bottom: 0,
      padding: 7,
      fontFamily: 'Exo2-Light',
      color: 'rgb(255,255,255)',
      fontSize: 11,
      backgroundColor: 'rgba(231, 199, 108, .7)'
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};
