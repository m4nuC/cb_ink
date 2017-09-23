import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { Svg } from 'expo';
import { TEARDROP_RADIUS, MAIN_COLOR } from '../constants';

export class TearDropLine extends Component {

  get leftPoint() {
    return this.props.points.reduce((leftMost, next) => {
      return leftMost.cx < next.cx ? leftMost : next
    })
  }

  get middle() {
    const leftPoint = this.leftPoint;
    const rightPoint = this.rightPoint;
    const middleX = (rightPoint.cx - leftPoint.cx)/2;
    return this.getPointOnlineFromX(middleX)
  }

  get YIntercept() {
    return this.normalizeSVGYAxis(this.leftPoint.cy)
  }

  get rightPoint() {
    return this.props.points.reduce((rightMost, next) => {
      return rightMost.cx > next.cx ? rightMost : next
    })
  }

  normalizeSVGYAxis(yValue) {
    const { height } = Dimensions.get('window');
    return height - yValue
  }


  get slope() {
    const leftPoint = this.leftPoint;
    const rightPoint = this.rightPoint;

    return (this.normalizeSVGYAxis(rightPoint.cy) - this.normalizeSVGYAxis(leftPoint.cy)) /
      (rightPoint.cx - leftPoint.cx)
  }

  getPointOnlineFromX(x) {
    console.log('slope', this.slope)
    return {
      cx: x,
      cy: this.normalizeSVGYAxis(
        this.normalizeSVGYAxis(this.leftPoint.cy) + this.slope * x
      )
    }
  }

  render() {
    const { points, strokeColor, strokeWidth} = this.props;
    if (points.length < 2) { return null }
    const leftPoint = this.leftPoint;
    const rightPoint = this.rightPoint;

    return (
      <Svg.Line
        strokeWidth={strokeWidth} stroke={strokeColor}
        x1={ leftPoint.cx }
        y1={ leftPoint.cy }
        x2={ rightPoint.cx }
        y2={ rightPoint.cy }
      />
    );
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
