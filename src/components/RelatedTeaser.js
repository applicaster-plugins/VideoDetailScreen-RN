import React, { PureComponent } from 'react';
import {
  Image,
  View,
  ViewPropTypes,
  TouchableWithoutFeedback
} from 'react-native';
import PropTypes from 'prop-types';
import Text from '@applicaster/london-rn-components/src/SafeText';

import Badge from './Badge';
import { styles } from './RelatedTeaser.styles';

const { string, object, func } = PropTypes;

export default class RelatedTeaser extends PureComponent {
  constructor(props) {
    super(props);
    this.onTap = this.onTap.bind(this);
  }

  onTap() {
    const { data, onTap } = this.props;
    onTap(data);
  }

  render() {
    const { label, dateTime, title, sportLabel, imageUri, style } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onTap}>
        <View style={[styles.container, style]}>
          <View style={styles.imageBox}>
            <Image style={styles.image} source={{ uri: imageUri }} />
            {Boolean(label) && <Badge style={styles.label} labelText={label} />}
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.dateTime} numberOfLines={1}>
              {dateTime}
            </Text>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.sectionLabel} numberOfLines={1}>
              {sportLabel}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

RelatedTeaser.propTypes = {
  id: string,
  labelColor: string,
  label: string,
  dateTime: string,
  title: string,
  sportLabel: string,
  imageUri: string,
  onTap: func,
  data: object,
  style: ViewPropTypes.style
};
