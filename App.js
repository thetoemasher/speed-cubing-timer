import React from 'react';
import { Alert, StyleSheet, Text, View, Button, PanResponder, TouchableNativeFeedback } from 'react-native';
import Buttons from './Buttons'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      button1: {x: 0, y: 0}
    }
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // console.log('grant', evt.nativeEvent.touches)
      },
      onPanResponderMove: (evt, gestureState) => {
        // if(evt.nativeEvent.touches.length === 2) {
            let button1 = evt.nativeEvent.touches[0]
            console.log(button1)
            this.setState({button1: {x: button1.locationX, y: button1.locationY}})
        // }
      }
    })
  }

  handlePress = (button) => {
    this.setState({[button]: !this.state[button]})
  }

  render() {
    return (
        <View style={styles.container} {...this._panResponder.panHandlers}
        // onResponderRelease={evt => {
        //   // let button1 = evt.nativeEvent.touches[0]
        //     this.setState({button1: {x: button1.locationX, y: button1.locationY}})
        // }}
        >
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          <Text style={{position: 'absolute', top: this.state.button1.y, left: this.state.button1.x, fontSize: 150, margin: 0, padding: 0}}>.</Text>
          {/* <Buttons text='BUTTTONONNNONON' />
          <Buttons text='Button 2' /> */}
          {/* <Button onPress={() => this.handlePress('button1')}title='Button 1' />
          <Button onPress={() => this.handlePress('button2')}title='Button 2' /> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
