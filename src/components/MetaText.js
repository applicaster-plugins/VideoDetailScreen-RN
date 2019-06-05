import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { styles } from './MetaText.styles';

class MetaText extends PureComponent {
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

MetaText.propTypes = {
  children: PropTypes.string
};

export default MetaText;
