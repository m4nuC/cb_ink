import { SET_TEARDROP } from '../actions'

export const inklinationAngle = (state = [], action) => {
  switch (action.type) {
    case SET_TEARDROP:
      // If we already have 2 teardrops stop there
      if (state.length === 2) {
        return state;
      }
      console.log(action.teardrop)
      return [].concat(state, action.teardrop)
    default:
      return state;
  }
}

export default inklinationAngle;
