import { StyleSheet } from 'react-native';
import { layout, stickyVideo, parameters, getVideoWidth } from '../utils';

export const styles = () => {
  const isStickyVideo = stickyVideo();
  const videoWidth = getVideoWidth();
  const base = {
    backgroundWrapper: {
      backgroundColor: 'rgb(16, 17, 22)',
      flex: 1
    },
    container: {
      paddingBottom: 20,
      paddingHorizontal: layout.isPhone ? 0 : 98,
      paddingTop: layout.isPhone ? 0 : 24,
      flexDirection: layout.isPhone ? 'column' : 'row',
      justifyContent: layout.isPhone ? 'flex-start' : 'center',
      alignItems: 'flex-start',
      backgroundColor: 'rgb(16, 17, 22)',
      flex: isStickyVideo ? 1 : 0
    },
    innerContainer: {
      width: videoWidth,
      flex: isStickyVideo ? 1 : 0
    },
    detailWrapper: {
      justifyContent: 'flex-start',
      paddingTop: 20,
      paddingRight: layout.isPhone ? 16 : 34,
      paddingLeft: layout.isPhone ? 16 : 0,
      flex: isStickyVideo ? 1 : 0
    },
    relatedList: {
      marginTop: layout.isPhone ? 20 : 0,
      marginLeft: layout.isPhone ? 0 : 24,
      flex: layout.isPhone ? 0 : 1
    },
    bodyText: {
      paddingBottom: 20
    }
  };

  const themes = {
    black: base
  };

  return StyleSheet.create(themes[parameters.theme]);
};
