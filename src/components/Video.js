import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { not } from 'ramda';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  NativeModules
} from 'react-native';
import { APVideoPlayer } from 'react-native-zapp-bridge';
import VideoBanner from './VideoBanner';
import assets from '../utils/assetsMap';
import Badge from './Badge';
import { getVideoDimensions, getCenterPosition, parameters } from '../utils';
import { styles } from './Video.styles';

class Video extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play() {
    const { playable } = this.props;
    const type = 'atom_entry';
    NativeModules.ZappPlayer.playFullScreen(type, playable, {});
  }

  renderPlayButton(imageSize) {
    const { isPlayable } = this.props;
    const playPosition = getCenterPosition(imageSize, {
      width: 30,
      height: 30
    });

    const playButtonImage = isPlayable ? (
      <Image source={assets.iconPlay} style={[styles.play, playPosition]} />
    ) : null;
    return playButtonImage;
  }

  renderBadge() {
    const { badgeText } = this.props;

    return badgeText ? (
      <Badge style={styles.label} labelText={badgeText} />
    ) : null;
  }

  getVideoTeaser() {
    const { image, isPlayable } = this.props;
    const imageSize = getVideoDimensions();
    const playButton = this.renderPlayButton(imageSize);

    return (
      <TouchableWithoutFeedback disabled={not(isPlayable)} onPress={this.play}>
        <View>
          <Image source={{ uri: image }} style={[styles.image, imageSize]} />
          <View style={[{ position: 'absolute', zIndex: 1 }, { ...imageSize }]}>
            {playButton}

            {this.renderBadge()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  getVideoPlayer() {
    const { image: img, playable } = this.props;
    const imageSize = getVideoDimensions();
    return (
      <APVideoPlayer
        {...{ src: { type: 'atom_entry', model: playable }, img }}
        style={imageSize}
      />
    );
  }

  render() {
    const { startTS, isLive, showBanner, isPlayable } = this.props;
    const { inlinePlayer, hideLiveBar } = parameters;
    return (
      <View style={styles.container}>
        {isPlayable && inlinePlayer
          ? this.getVideoPlayer()
          : this.getVideoTeaser()}
        {showBanner && !hideLiveBar ? (
          <VideoBanner {...{ startTS, isLive }} />
        ) : null}
      </View>
    );
  }
}

Video.propTypes = {
  playable: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image: PropTypes.string,
  startTS: PropTypes.number,
  isLive: PropTypes.bool,
  showBanner: PropTypes.bool,
  badgeText: PropTypes.string,
  isPlayable: PropTypes.bool
};

export default Video;
