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
    angle: 20,
    angleLine: null
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

  componentDidUpdate(prevProps) {
    // we need to make sure that TearDropLine has
    //  all the props it needsfor calculations
    if (prevProps.tearDrops.length !== 2 && this.props.tearDrops.length === 2) {
      this.setAngleLine();
    }
  }

  toRadian(degree) {
    return degree * (Math.PI / 180);
  }

  setAngleLine() {
    this.setState({
      angleLine: {
        start: this.tearDropLine.leftPoint, end: this.tearDropLine.rightPoint
      }
    })
  }

  render() {
    const { width, height } = Dimensions.get('window');
    const { tearDrops } = this.props;
    const { angleLine, angle } = this.state;
    return (
      <TouchableWithoutFeedback onPress={evt => this.handlePress(evt)}>
        <Svg height={height} width={width}
          style={{position: 'absolute'}}>
          <TearDropLine points={tearDrops}
            ref={el => this.tearDropLine = el}
          />
          { tearDrops.map(({cx, cy, id}) =>
            <TearDrop key={id} cx={cx} cy={cy} />)
          }

          { angleLine &&
            <Svg.Line
              rotate={`-${angle}`}
              origin={`${angleLine.start.cx}, ${angleLine.start.cy}`}
              strokeWidth={3} stroke='red'
              x1={ angleLine.start.cx }
              y1={ angleLine.start.cy }
              x2={ angleLine.end.cx }
              y2={ angleLine.end.cy }
            />
          }
        </Svg>
      </TouchableWithoutFeedback>
     )
  }
}
