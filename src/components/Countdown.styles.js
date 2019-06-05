import { StyleSheet } from 'react-native';
import { parameters } from '../utils';

export const baseStyles = () => {
  const base = {
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    inner: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '95%'
    },
    timeLabelTxt: {
      fontWeight: '500',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'center',
      color: 'rgb(153,153,153)',
      fontFamily: 'Exo2-Light'
    },
    timeTxt: {
      fontWeight: 'bold',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'center',
      color: 'rgb(0, 0, 0)',
      fontFamily: 'Exo2-SemiBold'
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};

export const compactStyles = () => {
  const base = {
    timeLabelTxt: {
      fontSize: 10
    },
    timeTxt: {
      fontSize: 20
    },
    digitWidth: {
      width: 14
    },
    textWrapper: {
      flex: 1
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};
