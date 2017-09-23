import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import SVGStage from './SVGStage';
import TearDrop from './TearDrop';
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
          { image &&
            <Image style={styles.image} source={{uri: image.uri}} />
          }
        </View>
        <SVGStage>
          <TearDrop cx={50} cy={50} r={4} />
        </SVGStage>
        <View style={styles.bottomUI}>
          <ImagePicker imageChange={this.imageChange}/>
        </View>
      </PinchZoomView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  bottomUI: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,.8)'
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
