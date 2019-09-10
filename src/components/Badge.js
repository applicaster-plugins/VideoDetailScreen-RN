import React from 'react';
import PropTypes from 'prop-types';
import Text from '@applicaster/london-rn-components/src/SafeText';

const Badge = ({ style, labelText }) => <Text style={style}>{labelText}</Text>;

Badge.propTypes = {
  style: PropTypes.any,
  labelText: PropTypes.string
};

export default Badge;
