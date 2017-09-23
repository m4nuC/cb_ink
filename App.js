import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';
import ImagePicker from './ImagePicker';

export default class App extends React.Component {
  imageChange() {

  }

  render() {
    return (
      <PinchZoomView style={styles.container}>
        <ImagePicker imageChange={this.imageChange}/>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Changes you make will automatically reload.</Text>
        <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
      </PinchZoomView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});
