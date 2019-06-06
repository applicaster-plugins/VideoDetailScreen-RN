import React, { Component } from 'react';
import { navigation } from 'react-native-zapp-bridge';
import { View, Image, TouchableHighlight } from 'react-native';
import assets from '../utils/assetsMap';
import { styles } from './Header.styles';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.styles = styles();
  }

  handleClose() {
    navigation.closeModalScreen();
  }

  handleShare() {
    console.log('share');
  }

  handleCast() {
    console.log('cast');
  }

  render() {
    return (
      <View style={this.styles.container}>
        <TouchableHighlight onPress={this.handleClose} style={this.styles.btn}>
          <Image source={assets.iconClose} style={this.styles.closeImg} />
        </TouchableHighlight>
      </View>
    );
  }
}
