import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ScrollView, View } from 'react-native';

import {
  layout,
  getVideoProps,
  getDetailProps,
  getRelatedList,
  getPlayable,
  stickyVideo,
  hasRelatedContent
} from '../utils';

import BodyText from './BodyText';
import MetaText from './MetaText';
import PrimaryTitle from './PrimaryTitle';
import Video from './Video';
import RelatedList from './RelatedList';
import { styles } from './VideoDetail.styles';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    // deferred to parse theme parameter
    this.styles = styles();
    this.stickyVideo = stickyVideo();
    this.hasRelatedContent = hasRelatedContent();
  }

  renderDetails() {
    const {
      entry,
      collapseText,
      toggleCollapseText,
      related,
      relatedLoading,
      handleVideoChange
    } = this.props;
    const { title, meta, body } = getDetailProps(entry);
    const { isPhone } = layout;
    return [
      <PrimaryTitle key="title">{title}</PrimaryTitle>,
      <MetaText key="meta">{meta}</MetaText>,
      <BodyText
        key="body"
        style={this.styles.bodyText}
        {...{ collapseText, toggleCollapseText }}
      >
        {body}
      </BodyText>,
      isPhone && this.hasRelatedContent && (
        <RelatedList
          key="related"
          style={this.styles.relatedList}
          list={getRelatedList(related)}
          loading={relatedLoading}
          onTapItem={handleVideoChange}
        />
      )
    ];
  }

  renderContent() {
    const { entry, related, relatedLoading, handleVideoChange } = this.props;
    const { isTablet } = layout;
    return (
      <View style={this.styles.container}>
        <View style={this.styles.innerContainer}>
          <Video {...getVideoProps(entry)} playable={getPlayable(entry)} />
          <View style={this.styles.detailWrapper}>
            {this.stickyVideo ? (
              <ScrollView>{this.renderDetails()}</ScrollView>
            ) : (
              this.renderDetails()
            )}
          </View>
        </View>
        {isTablet && this.hasRelatedContent && (
          <RelatedList
            style={this.styles.relatedList}
            list={getRelatedList(related)}
            loading={relatedLoading}
            onTapItem={handleVideoChange}
          />
        )}
      </View>
    );
  }

  render() {
    if (this.stickyVideo)
      return (
        <View style={this.styles.backgroundWrapper}>
          {this.renderContent()}
        </View>
      );
    return (
      <View style={this.styles.backgroundWrapper}>
        <ScrollView>{this.renderContent()}</ScrollView>
      </View>
    );
  }
}

VideoDetail.propTypes = {
  entry: PropTypes.object,
  related: PropTypes.array,
  relatedLoading: PropTypes.bool,
  collapseText: PropTypes.bool,
  handleVideoChange: PropTypes.func,
  toggleCollapseText: PropTypes.func
};

export default VideoDetail;
