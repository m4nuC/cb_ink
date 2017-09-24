import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import Spinner from 'rn-spinner';
import TearDropStage from '../../containers/TearDropStage/';
import PinchZoomView from 'react-native-pinch-zoom-view';
import ImagePicker from '../../components/ImagePicker/';
import { TEARDROP_RADIUS, MAIN_COLOR } from '../../utilities/constants';

export default class App extends React.Component {
  state = {
    image: null
  }

  imageChange = (image) => {
    this.setState({image});
  }

  onAngleChange = (angle) => {
    this.props.setInklination(angle);
  }

  render() {
    const { image } = this.state;
    const { inklinationAngle } = this.props;
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
            <Text style={styles.title} >INLKINATION COMPARAISON</Text>
            <Text style={styles.text} >COMPARE INLKINATION ANGLE VS. TARGET ANGLE</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.center_text} >ANGLE</Text>
            <Spinner
              value={inklinationAngle}
              style={styles.input}
              max={80}
              onNumChange={this.onAngleChange}
            />
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
    backgroundColor: '#000000',
    justifyContent: 'space-between'
  },
  pinchableView: {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bottomUI: {
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,.8)'
  },
  input: {
  },
  imageContainer: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    marginBottom: 30
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  center_text: {
    textAlign: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
  },
  image: {
    flex: 1
  }
});
