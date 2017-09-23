import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { Constants, Svg } from 'expo';

export default ({children}) => {
  const { width, height } = Dimensions.get('window');
  return (
    <Svg height={width} width={height}>
      {children}
    </Svg>
   )
}
