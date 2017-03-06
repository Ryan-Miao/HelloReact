import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#28FF28'
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#00FFFF'
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: '#FF00FF'
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          backgroundColor: '#7B68EE'
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#BDB76B'
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#FF4500'
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          backgroundColor: '#C0C0C0'
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
        {/*center*/}
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFC0CB'
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);