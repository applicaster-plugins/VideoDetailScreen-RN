import { StyleSheet } from 'react-native';
import { parameters } from '../utils';

export const styles = () => {
  const base = {
    container: {
      height: 60,
      backgroundColor: 'rgb(255, 255, 255)',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    inner: {
      flexDirection: 'row'
    },
    col1: {
      width: '29%',
      maxWidth: 159,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height: '100%',
      paddingHorizontal: 16
    },
    col1Large: {
      paddingHorizontal: 0,
      alignItems: 'flex-start'
    },
    col2: {
      width: '71%',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 16
    },
    textWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      fontStyle: 'normal',
      lineHeight: 16,
      letterSpacing: -0.28,
      textAlign: 'left',
      color: 'rgb(0,0,0)'
    },
    liveStatus: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      flexDirection: 'row',
      flex: 1
    },
    liveTxt: {
      fontSize: 15,
      fontWeight: 'bold',
      fontStyle: 'normal',
      lineHeight: 16,
      letterSpacing: 0,
      textAlign: 'center',
      fontFamily: 'Exo2-SemiBold',
      color: 'rgb(0,0,0)'
    },
    liveIndicator: {
      backgroundColor: 'rgb(255,0,58)',
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 9
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};
