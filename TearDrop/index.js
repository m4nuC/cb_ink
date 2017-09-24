import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Svg } from 'expo';
import { TEARDROP_RADIUS, MAIN_COLOR } from '../constants';

export const TearDrop = ({
  cx,
  cy,
  radius,
  strokeWidth,
  fillColor,
  strokeColor,
}) => {
  return (
    <Svg.Circle
      cx={cx}
      cy={cy}
      r={TEARDROP_RADIUS}
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      fill={fillColor}
    />
   )
}

TearDrop.defaultProps = {
  strokeWidth: 2,
  radius: 10,
  strokeColor: MAIN_COLOR,
  fillColor: 'rgba(0,0,0,0.5)'
}

TearDrop.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  radius: PropTypes.number,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string
}

export default TearDrop;
