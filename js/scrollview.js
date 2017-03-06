import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:48}}>Scroll me plz</Text>
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Text style={{fontSize:48}}>If you like</Text>
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Text style={{fontSize:48}}>Scrolling down</Text>
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Text style={{fontSize:48}}>What's the best</Text>
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Text style={{fontSize:48}}>Framework around?</Text>
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Image source={require('./img/dog.jpg')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);