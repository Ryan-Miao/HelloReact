import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'http://img2.sucaifengbao.com/813/813b_109_XVTb.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Bananas);