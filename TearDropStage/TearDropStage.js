import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { Constants, Svg } from 'expo';
import TearDrop from '../TearDrop';

export default class TearDropStage extends React.Component {

  handlePress(evt) {
    console.warn(evt.nativeEvent)
    console.log('asdfs')
  }

  render() {
    const { width, height } = Dimensions.get('window');
    const { children } = this.props;

    return (
      <TouchableWithoutFeedback onPress={evt => this.handlePress(evt)}>
        <Svg height={height} width={width} style={{position: 'absolute'}}>
          <TearDrop cx={50} cy={50} r={4} />
        </Svg>
      </TouchableWithoutFeedback>
     )
  }
}
