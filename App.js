import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
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
    this.setState({image});
  }

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView maximumZoomScale={4} style={styles.pinchableView}>
          { image &&
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: image.uri}} />
            </View>
          }
          <SVGStage>
            <TearDrop cx={50} cy={50} r={4} />
          </SVGStage>
        </ScrollView>
        <View style={styles.bottomUI}>
          <ImagePicker imageChange={this.imageChange}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'space-between'
  },
  pinchableView: {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bottomUI: {
    height: 20,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,.8)'
  },
  imageContainer: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'red',
    alignItems: 'stretch'
  },
  text: {
    color: 'white'
  },
  image: {
    flex: 1
  }
});
