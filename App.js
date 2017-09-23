import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';
import ImagePicker from './ImagePicker';

export default class App extends React.Component {
  state = {
    image: null
  }

  imageChange = (image) => {
    this.setState({image})
  }

  render() {
    const { image } = this.state;
    return (
      <PinchZoomView style={styles.container}>
        <View style={styles.imageContainer}>
          { image ?
            <Image style={styles.image} source={{uri: image.uri}} /> :
            <ImagePicker imageChange={this.imageChange}/>
          }
        </View>
      </PinchZoomView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  text: {
    color: 'white'
  },
  image: {
    flex: 1
  }
});
