import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '@applicaster/london-rn-components/src/SafeText';
import { styles } from './PrimaryTitle.styles';

class PrimaryTitle extends PureComponent {
  constructor(props) {
    super(props);
    // deferred for layout data to be ready
    this.styles = styles();
  }

  render() {
    const { children } = this.props;
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.text}>{children}</Text>
      </View>
    );
  }
}

PrimaryTitle.propTypes = {
  children: PropTypes.string
};

export default PrimaryTitle;
