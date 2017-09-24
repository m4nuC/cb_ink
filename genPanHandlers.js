import {PanResponder} from 'react-native';

export default (handler) => PanResponder.create({
// Ask to be the responder:
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
  onMoveShouldSetPanResponder: (evt, gestureState) => true,
  onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
  onPanResponderTerminationRequest: (evt, gestureState) => true,
  onShouldBlockNativeResponder: (evt, gestureState) => true,
  onPanResponderGrant: (evt, gestureState) => {},
  onPanResponderMove: (evt, gestureState) => {},
  onPanResponderRelease: (evt, gestureState) => {},
  onPanResponderTerminate: (evt, gestureState) => {},
  ...handler
});
