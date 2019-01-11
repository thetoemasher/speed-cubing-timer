import React from 'react';
import {Text, View } from 'react-native';

export default class Buttons extends React.Component {

  render() {
    return (
      <View onStartShouldSetResponder={(evt) => {console.log('touch'); return true}} onResponderRelease={() => console.log(this.props.text)}>
        <Text>I'm a fake button {this.props.text}</Text>
      </View>
    );
  }
}