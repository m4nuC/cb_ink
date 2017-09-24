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
    return this.getPointFromX(this.middleX)
  }

  get middleX() {
    return this.leftPoint.cx + (this.rightPoint.cx - this.leftPoint.cx)/2;
  }

  get YIntercept() {
    return this.normalizeSVGYAxis(
      (this.slope * this.leftPoint.cx) + this.leftPoint.cy
    )
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

  getPointFromX(x) {
    return {
      cx: x,
      // y = mx + b
      cy: this.normalizeSVGYAxis(this.slope * x + this.YIntercept)
    }
  }

  render() {
    const { points, strokeColor, strokeWidth} = this.props;
    const { width, height} = Dimensions.get('screen');

    if (points.length < 2) { return null }

    const leftPoint = this.getPointFromX(0);
    const rightPoint = this.getPointFromX(width);
    // console.log('screen height:', height)
    // console.log(`a: ${this.leftPoint.cx} ${this.leftPoint.cy}`)
    // console.log(`b: ${this.rightPoint.cx} ${this.rightPoint.cy}`)
    // console.log(`a normalized: ${this.leftPoint.cx} ${this.normalizeSVGYAxis(this.leftPoint.cy)}`)
    // console.log(`b normalized: ${this.rightPoint.cx} ${this.normalizeSVGYAxis(this.rightPoint.cy)}`)
    // console.log(`a estimate: ${leftPoint.cx} ${leftPoint.cy}`)
    // console.log(`b estimate: ${rightPoint.cx} ${rightPoint.cy}`)
    // console.log(`a estimate norm.: ${leftPoint.cx} ${this.normalizeSVGYAxis(leftPoint.cy)}`)
    // console.log(`b estimate norm.: ${rightPoint.cx} ${this.normalizeSVGYAxis(rightPoint.cy)}`)
    // console.log(`slope ${this.slope}`)
    return (
      <Svg.Line
        strokeDasharray={[4, 2]}
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
