import React from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';
import { ImagePicker as ExpoImagePicker} from 'expo';

export default class ImagePicker extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Take a picture with the IPad camera"
          onPress={this._pickImage}
        />
      </View>
    );
  }

  _pickImage = async () => {
    const { imageChange } = this.props;
    try {
      const image = await ExpoImagePicker.launchCameraAsync({});
      if ( ! image.cancelled) {
        imageChange(image);
      }
    } catch(e) {
      console.warn(e)
    }


  };

  static propTypes = {
    imageChange: PropTypes.func.isRequired
  };
}
