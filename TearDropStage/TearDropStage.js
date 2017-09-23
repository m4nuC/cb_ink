import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { Svg } from 'expo';
import TearDrop from '../TearDrop';

export default class TearDropStage extends React.Component {

  handlePress(evt) {
    const { setTeardrop } = this.props;
    const { locationX, locationY } = evt.nativeEvent;
    setTeardrop({
      id: Date.now(),
      cx: locationX,
      cy: locationY
    });
  }

  render() {
    const { width, height } = Dimensions.get('window');
    const { tearDrops } = this.props;

    return (
      <TouchableWithoutFeedback onPress={evt => this.handlePress(evt)}>
        <Svg height={height} width={width} style={{position: 'absolute'}}>
          { tearDrops.map(({cx, cy, id}) =>
            <TearDrop id={id} cx={cx} cy={cy} />)
          }
          {
            tearDrops.length === 2 &&
            <Svg.Line
              stroke-width="2" stroke="blue"
              x1={tearDrops[0].cx}
              y1={tearDrops[0].cy}
              x2={tearDrops[1].cx}
              y2={tearDrops[1].cy}
            />
          }
        </Svg>
      </TouchableWithoutFeedback>
     )
  }
}
