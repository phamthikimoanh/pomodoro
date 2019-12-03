import * as types from "../action/actionTypes";
import { initStateSetting } from "./setting";
export const initStateTimer = {
  clockTime: 1500,
  isBreakTime: false,
  isTimePaused: false,
  isTimeRunning: false,
  secondElapsed: 0
};
const timer = (state = initStateTimer, action) => {
  switch (action.type) {
    case types.START_TIMER:
      return Object.assign({}, state, {
        isTimeRunning: true,
        isTimerPaused: false
      });
    case types.STOP_TIMER:
      return Object.assign({}, state, {
        isTimeRunning: false,
        isTimerPaused: true
      });
    case "RESET_TIMER":
      return {
        ...state,
        isTimerRunning: false,
        isTimerPaused: false,
        isBreakTime: false,
        clockTime:
          initStateSetting.sessionLength !== ""
            ? state.sessionLength * 60
            : 1500, // in seconds
        secondsElapsed: 0
      };
    case "RUN_TIMER":
      return {
        ...state,
        secondsElapsed: state.secondsElapsed + 1
      };
    default:
      return state;
  }
};
export default timer;
