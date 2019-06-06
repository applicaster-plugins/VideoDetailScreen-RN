import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import RelatedTeaser from './RelatedTeaser';
import { labels } from '../utils';
import { styles } from './RelatedList.styles';

const { bool, array, func } = PropTypes;

class RelatedList extends PureComponent {
  constructor(props) {
    super(props);
    // deferred to load theme parameter
    this.styles = styles();
  }

  render() {
    const { loading, list, onTapItem, style } = this.props;
    return (
      <View style={[this.styles.container, style]}>
        <Text style={this.styles.title}>{labels.relatedVideos}</Text>
        {loading && (
          <View style={this.styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        )}
        {list &&
          list.map(({ id, ...teaser }) => (
            <RelatedTeaser
              key={id}
              style={this.styles.teaser}
              onTap={onTapItem}
              {...teaser}
            />
          ))}
      </View>
    );
  }
}

RelatedList.propTypes = {
  loading: bool,
  list: array,
  onTapItem: func,
  style: ViewPropTypes.style
};

export default RelatedList;
