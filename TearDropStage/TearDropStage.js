import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { Svg } from 'expo';
import TearDrop from '../TearDrop';
import TearDropLine from '../TearDropLine';
import { TEARDROP_RADIUS, MAIN_COLOR } from '../constants';

export default class TearDropStage extends React.Component {

  state = {
    angle: 40
  }

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
            <TearDrop key={id} cx={cx} cy={cy} />)
          }
          {
            tearDrops.length === 2 &&
              <TearDropLine points={tearDrops}/>
          }
        </Svg>
      </TouchableWithoutFeedback>
     )
  }
}
