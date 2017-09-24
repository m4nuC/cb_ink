import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { ImagePicker as ExpoImagePicker} from 'expo';
import { MAIN_COLOR } from '../../utilities/constants';

const styles = StyleSheet.create({
  button: {
    backgroundColor: MAIN_COLOR,
    overflow: 'hidden',
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    alignSelf: 'center'
  },
});

export default class ImagePicker extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}
        onPress={this.pickImage}
      ><Text style={{color: 'white', textAlign: 'center'}}>RETAKE</Text></TouchableOpacity>
    );
  }

  pickImage = async () => {
    const { imageChange } = this.props;
    try {
      const image = await ExpoImagePicker.launchCameraAsync({});
      if ( ! image.cancelled) {
        imageChange(image);
      }
    } catch(e) {
      console.warn(e)
    }
  }
}
