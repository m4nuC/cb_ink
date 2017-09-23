import { SET_INKLINATION_ANGLE } from '../actions'

export const inklinationAngle = (state = 40, action) => {
  switch (action.type) {
    case SET_INKLINATION_ANGLE:
      return action.angle
    default:
      return state;
  }
}

export default inklinationAngle;
