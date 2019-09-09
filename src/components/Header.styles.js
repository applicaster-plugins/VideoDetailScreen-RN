import { StyleSheet } from 'react-native';
import { parameters } from '../utils';

export const styles = () => {
  const base = {
    container: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'rgb(16, 17, 22)',
      height: 44,
      width: '100%'
    },
    touchableHighlight: {
      backgroundColor: 'transparent'
    },
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5
    },
    closeImg: {
      width: 32,
      height: 32
    },
    castImg: {
      width: 32,
      height: 32
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};
