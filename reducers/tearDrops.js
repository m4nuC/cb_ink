import { SET_TEARDROP, RESET_TEARDROP } from '../actions'

export const inklinationAngle = (state = [], action) => {
  switch (action.type) {
    case SET_TEARDROP:
      // If we already have 2 teardrops stop there
      if (state.length === 2) {
        return state;
      }
      return [].concat(state, action.teardrop)
    case RESET_TEARDROP:
      return [];
    default:
      return state;
  }
}

export default inklinationAngle;
