import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import Text from '@applicaster/london-rn-components/src/SafeText';
import { labels, parameters } from '../utils';
import { styles } from './BodyText.styles';

class BodyText extends PureComponent {
  constructor(props) {
    super(props);
    // deferred for layout data to be ready
    this.styles = styles();
  }

  render() {
    const { style, children, collapseText, toggleCollapseText } = this.props;
    const { compactDescription } = parameters;
    return (
      <View style={[this.styles.container, style]}>
        <Text
          accessible={true}
          allowFontScaling={true}
          ellipsizeMode="tail"
          style={this.styles.text}
          numberOfLines={!compactDescription || collapseText ? undefined : 3}
        >
          {children}
        </Text>
        {compactDescription && (
          <Text style={this.styles.toggle} onPress={toggleCollapseText}>
            {collapseText ? labels.fewer : labels.more}
          </Text>
        )}
      </View>
    );
  }
}

BodyText.defaultProps = { style: {} };
BodyText.propTypes = {
  children: PropTypes.string,
  style: ViewPropTypes.style,
  toggleCollapseText: PropTypes.func,
  collapseText: PropTypes.bool
};

export default BodyText;
