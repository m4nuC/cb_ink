import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Svg } from 'expo';
import { TEARDROP_RADIUS, MAIN_COLOR } from '../../utilities/constants';

export const TearDrop = ({
    id,
    cx,
    cy,
    radius,
    strokeWidth,
    fillColor,
    scale,
    strokeColor,
    opacity,
    setActiveTearDrop,
  }) => (
  <Svg.Circle
    onPressIn={() => setActiveTearDrop(id)}
    cx={cx}
    cy={cy}
    scale={scale}
    fillOpacity={opacity}
    strokeOpacity={opacity}
    r={radius}
    strokeWidth={strokeWidth}
    stroke={strokeColor}
    fill={fillColor}
  />
)

TearDrop.defaultProps = {
  strokeWidth: 2,
  scale: 1,
  opacity: 1,
  radius: TEARDROP_RADIUS,
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
