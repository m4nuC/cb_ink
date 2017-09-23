import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';

export default class App extends React.Component {
  render() {
    return (
      <PinchZoomView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </PinchZoomView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
