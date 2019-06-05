import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '@applicaster/london-rn-components/src/SafeText';
import Countdown from './Countdown';
import { getVideoWidth, labels } from '../utils';
import { styles } from './VideoBanner.styles';

const renderLiveStatusText = () => {
  const width = getVideoWidth();
  return (
    <View style={[styles.inner, { width }]}>
      <View style={styles.liveStatus}>
        <View style={styles.liveIndicator} />
        <Text style={styles.liveTxt}>{labels.liveNow}</Text>
      </View>
    </View>
  );
};

const renderCountDownText = startTS => {
  const width = getVideoWidth();
  return (
    <View style={[styles.inner, { width }]}>
      <View style={[styles.col1]}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{`${labels.eventStartsIn}:`}</Text>
        </View>
      </View>
      <View style={styles.col2}>
        <Countdown {...{ startTS }} />
      </View>
    </View>
  );
};

const VideoBanner = props => {
  const { startTS, isLive } = props;
  return (
    <View style={styles.container}>
      {isLive ? renderLiveStatusText() : renderCountDownText(startTS)}
    </View>
  );
};

VideoBanner.propTypes = {
  startTS: PropTypes.number,
  isLive: PropTypes.bool
};

export default VideoBanner;
