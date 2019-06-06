import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '@applicaster/london-rn-components/src/SafeText';
import { View } from 'react-native';
import { layout, labels } from '../utils';
import { baseStyles, compactStyles } from './Countdown.styles';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.interval = null;
    this.baseStyles = baseStyles();
    this.compactSyles = compactStyles();
  }

  updateCountdown() {
    const { startTS } = this.props;

    const today = new Date().getTime();
    const target = startTS;

    const distance = target - today;
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentWillMount() {
    const updateInterval = 1000;
    this.interval = setInterval(
      this.updateCountdown.bind(this),
      updateInterval
    );
    this.updateCountdown();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeUnit(unit, label) {
    const styles = this.compactSyles;
    const arr = unit.toString().split('');
    if (arr.length < 2) {
      arr.unshift('0');
    }

    return (
      <View style={styles.textWrapper}>
        <View style={[this.baseStyles.wrapper, styles.wrapper]}>
          <Text
            style={[this.baseStyles.timeTxt, styles.timeTxt, styles.digitWidth]}
          >
            {arr[0]}
          </Text>
          <Text
            style={[this.baseStyles.timeTxt, styles.timeTxt, styles.digitWidth]}
          >
            {arr[1]}
          </Text>
        </View>
        <Text style={[this.baseStyles.timeLabelTxt, styles.timeLabelTxt]}>
          {label}
        </Text>
      </View>
    );
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    const compactLabels = {
      days: labels.days,
      hours: 'h',
      minutes: 'min',
      seconds: 's'
    };
    const fullLabels = {
      days: labels.days,
      hours: labels.hours,
      minutes: labels.minutes,
      seconds: labels.seconds
    };
    const timeLabels = layout.isPhone ? compactLabels : fullLabels;

    return (
      <View style={this.baseStyles.container}>
        <View style={this.baseStyles.inner}>
          {this.getTimeUnit(days, timeLabels.days)}
          {this.getTimeUnit(hours, timeLabels.hours)}
          {this.getTimeUnit(minutes, timeLabels.minutes)}
          {this.getTimeUnit(seconds, timeLabels.seconds)}
        </View>
      </View>
    );
  }
}

Countdown.propTypes = {
  startTS: PropTypes.number
};
