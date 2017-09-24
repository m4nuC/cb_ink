import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
import TearDropStage from '../TearDropStage/';
import PinchZoomView from 'react-native-pinch-zoom-view';
import ImagePicker from '../ImagePicker/';
import { TEARDROP_RADIUS, MAIN_COLOR } from '../constants';

export default class App extends React.Component {
  state = {
    image: null
  }

  imageChange = (image) => {
    this.props.resetTeardrop();
    this.setState({image});
  }

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView scrollEnabled={false}
          maximumZoomScale={4}
          style={styles.pinchableView}
        >
          { image &&
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: image.uri}} />
            </View>
          }
          <TearDropStage/>
        </ScrollView>
        <View style={styles.bottomUI}>
          <View>
            <Text style={styles.text} >ANGLE</Text>
            <TextInput style={styles.input}/>
          </View>
          <View>
            <Text style={styles.title} >INLKINATION COMPARAISON</Text>
            <Text style={styles.text} >COMPARE INLKINATION ANGLE VS. TARGET ANGLE</Text>
          </View>
          <ImagePicker imageChange={this.imageChange}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  pinchableView: {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bottomUI: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,.8)'
  },
  input: {
    width: 50,
    height: 20,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderColor: 'black',
    color: MAIN_COLOR,
    borderRadius: 3,
    padding: 4
  },
  imageContainer: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'red',
    alignItems: 'stretch'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
  },
  image: {
    flex: 1
  }
});
