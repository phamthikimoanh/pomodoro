import * as types from "./actionTypes";

export const updateSessionLength = value => ({
  type: types.UPDATE_SESSION_LENGTH,
  value
});

export const updateBreakLength = value => ({
  type: types.UPDATE_BREAK_LENGTH,
  value
});

export const toggleAlarmSound = () => ({
  type: types.TOGGLE_ALARM_SOUND
});

export const toggleAutoStart = () => ({
  type: types.TOGGLE_AUTO_START
});
export const startTimer = () => ({
  type: types.START_TIMER
});

export const runTimer = () => ({
  type: types.RUN_TIMER
});

export const stopTimer = () => ({
  type: types.STOP_TIMER
});

export const resetTimer = () => ({
  type: types.RESET_TIMER
});

export const startBreak = () => ({
  type: types.START_BREAK
});

// export const autoStartTimer = () => ({
//   type: types.AUTO_START_TIMER
// });
