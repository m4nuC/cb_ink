import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
} from 'react-native';
import { Svg } from 'expo';
import { TEARDROP_RADIUS, MAIN_COLOR } from '../constants';

export class TearDropLine extends Component {

  get leftPoint() {
    return this.props.points.reduce((leftMost, next) => {
      return leftMost.cx < next.cx ? leftMost : next
    })
  }

  get rightPoint() {
    return this.props.points.reduce((leftMost, next) => {
      return leftMost.cx > next.cx ? leftMost : next
    })
  }

  render() {
    const { points, strokeColor, strokeWidth} = this.props;
    return (
      <Svg.Line
        stroke-width={strokeWidth} stroke={strokeColor}
        x1={this.leftPoint.cx + TEARDROP_RADIUS/2}
        y1={this.leftPoint.cy + TEARDROP_RADIUS/2}
        x2={this.rightPoint.cx - TEARDROP_RADIUS/2}
        y2={this.rightPoint.cy - TEARDROP_RADIUS/2}
      />
    )
  }
}

TearDropLine.defaultProps = {
  strokeWidth: 2,
  strokeColor: MAIN_COLOR,
  fillColor: 'rgba(0,0,0,0.5)'
}

TearDropLine.propTypes = {
  points: PropTypes.array.isRequired,
}

export default TearDropLine;
