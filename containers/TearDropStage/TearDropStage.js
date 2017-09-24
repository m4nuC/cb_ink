import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import genPanHandlers from '../../utilities/genPanHandlers'
import { Svg } from 'expo';
import TearDrop from '../../components/TearDrop';
import TearDropLine from '../../components/TearDropLine';
import {
  TEARDROP_RADIUS,
  MAIN_COLOR,
  ANGLELINE_BASE_RADIUS
} from '../../utilities/constants';

export default class TearDropStage extends React.Component {

  state = {
    // Store coordinates of the angle line
    angleLine: null,

    // The teardrop currently being dragged
    activeTeardropID: null,

    // Should we reverse the angleline
    flipLine: false,

    tempTearDrop: {show: false, pos: {cx: 0, cy: 0}}
  }

  _panResponder = genPanHandlers({
    onPanResponderMove: (evt, gestureState) => {
      const { activeTeardropID, tempTearDrop } = this.state;
      const { moveX, moveY, numberActiveTouches } = gestureState;

      if (numberActiveTouches > 1) return;

      // Move teardrops or angle line base point
      if (activeTeardropID) {
        let angleLineBase = null;

        if (activeTeardropID === 'angleLine-base') {
          angleLineBase = this.tearDropLine.getPointAtX(moveX)
        // Move Teardrops points
        } else {
          this.props.moveTeardrop({
            id: activeTeardropID,
            cx: moveX,
            cy: moveY
          });
        }
        this.setAngleLine(angleLineBase);
      }

      // move the temporary teardrop (used to give instant feedback when users touches the screen)
      if (tempTearDrop.show) {
        this.setState({tempTearDrop: {show: true, pos: {cx: moveX, cy: moveY}}});
      }
    },

    onPanResponderGrant: (evt, gestureState) => {
      const { locationX, locationY } = evt.nativeEvent;
      this.setState({tempTearDrop: {show: true, pos: {cx: locationX, cy: locationY}}});
    },

    onPanResponderRelease: (evt, gestureState) => {
      const { locationX, locationY } = evt.nativeEvent;
      const activeTeardropID = Date.now();
      this.props.setTeardrop({
        id: activeTeardropID,
        cx: locationX,
        cy: locationY
      });
      this.setState({
        activeTeardropID: null,
        tempTearDrop: {show: false, pos: {cx: 0, cy: 0}}
      });
    }
  })

  setActiveTearDrop = activeTeardropID => {
    this.setState({activeTeardropID});
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

  setAngleLine(base) {
    const { width } = Dimensions.get('screen');
    const middle = this.tearDropLine.middle;
    base = base || middle;
    const flipLine = base.cx < middle.cx;
    this.setState({
      angleLine: {
        base,
        end: this.tearDropLine.getPointAtX(1000)
      },
      flipLine
    })
  }

  render() {
    const { width, height } = Dimensions.get('window');
    const { tearDrops, inklinationAngle } = this.props;
    const { angleLine, flipLine, activeTeardropID, tempTearDrop } = this.state;
    const angle = flipLine ? 180 - inklinationAngle : inklinationAngle;
    return (
      <Svg
        {...this._panResponder.panHandlers}
        height={height}
        width={width}
        style={{position: 'absolute'}}
      >
        <TearDropLine points={tearDrops}
          ref={el => this.tearDropLine = el}
        />
        { tearDrops.map(({cx, cy, id}) =>
          <TearDrop
            opacity={id === activeTeardropID ? 0.6 : 1}
            setActiveTearDrop={this.setActiveTearDrop}
            key={id} cx={cx} cy={cy} id={id}
          />)
        }
        { angleLine &&
          <Svg.Line
            rotate={`-${angle}`}
            origin={`${angleLine.base.cx}, ${angleLine.base.cy}`}
            strokeWidth={2} stroke={MAIN_COLOR}
            x1={ angleLine.base.cx }
            y1={ angleLine.base.cy }
            x2={ angleLine.end.cx }
            y2={ angleLine.end.cy }
          />
        }
        { angleLine &&
          <TearDrop
            radius={ANGLELINE_BASE_RADIUS}
            opacity={'angleLine-base' === activeTeardropID ? 0.6 : 1}
            fillColor={MAIN_COLOR}
            setActiveTearDrop={this.setActiveTearDrop}
            id="angleLine-base"
            cx={angleLine.base.cx} cy={angleLine.base.cy}
          />
        }

        <TearDrop
          opacity={ tempTearDrop.show ? 0.6 : 0}
          radius={20}
          cx={tempTearDrop.pos.cx} cy={tempTearDrop.pos.cy}
        />

      </Svg>
     )
  }
}
