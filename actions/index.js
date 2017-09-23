export const SET_INKLINATION_ANGLE = 'SET_INKLINATION_ANGLE';
export const SET_TEARDROP = 'SET_TEARDROP';
export const MOVE_TEAR_DROP = 'MOVE_TEAR_DROP';

export const setInklination = angle => ({
  type: SET_INKLINATION_ANGLE,
  angle
})

export const setTeardrop = teardrop => ({
  type: SET_TEARDROP,
  teardrop
})