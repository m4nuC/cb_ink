import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';
import Expo from 'expo';
import Spinner from 'rn-spinner';
import TearDropStage from '../../containers/TearDropStage/';
import PinchZoomView from 'react-native-pinch-zoom-view';
import ImagePicker from '../../components/ImagePicker/';
import { TEARDROP_RADIUS, MAIN_COLOR } from '../../utilities/constants';

export default class App extends React.Component {
  constructor() {
    super();
    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
          width: Dimensions.get('screen').width
      });
    });
  }

  state = {
    image: null,
    width: Dimensions.get('screen').width
  }

  imageChange = (image) => {
    this.setState({image});
  }

  onAngleChange = (angle) => {
    this.props.setInklination(angle);
  }

  render() {
    const { image, reorientedAt } = this.state;
    const { inklinationAngle } = this.props;
    return (
      <View reorientedAt={reorientedAt} style={this.styles.container}>
        <ScrollView scrollEnabled={false}
          maximumZoomScale={4}
          style={this.styles.pinchableView}
        >
          { image &&
            <View style={this.styles.imageContainer}>
              <Image style={this.styles.image} source={{uri: image.uri}} />
            </View>
          }
          <TearDropStage/>
        </ScrollView>
        <View style={this.styles.bottomUI}>
          <View>
            <Text style={this.styles.title} >INLKINATION COMPARAISON</Text>
            <Text style={this.styles.text} >COMPARE INLKINATION ANGLE VS. TARGET ANGLE</Text>
          </View>
          <View style={this.styles.input}>
            <Text style={this.styles.center_text} >ANGLE</Text>
            <Spinner
              value={inklinationAngle}
              style={this.styles.input}
              max={80}
              onNumChange={this.onAngleChange}
            />
          </View>
          <ImagePicker imageChange={this.imageChange}/>
        </View>
      </View>
    );
  }

  get styles() {
    return StyleSheet.create({
      container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: '#000000',
        justifyContent: 'space-between'
      },
      pinchableView: {
        flex:1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
      },
      bottomUI: {
        paddingTop: 8,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Dimensions.get('screen').width,
        backgroundColor: 'rgba(0,0,0,.8)'
      },
      input: {
      },
      imageContainer: {
        flex: 1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
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
    })
  }
}
