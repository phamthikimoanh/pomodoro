import * as types from "../action/actionTypes";
import initState from "./initState";
export const timer = (state = initState, action) => {
  switch (action.type) {
    case types.START_TIMER:
      return {
        ...state,
        isTimerRunning: true,
        isTimerPaused: false
      };
    case types.STOP_TIMER:
      return {
        ...state,
        isTimerRunning: false,
        isTimerPaused: true
      };
    case types.RESET_TIMER:
      return {
        ...state,
        isTimerRunning: false,
        isTimerPaused: false,
        isBreakTime: false,
        clockTime: state.sessionLength !== "" ? state.sessionLength * 60 : 1500, // in seconds
        secondsElapsed: 0
      };
    case types.RUN_TIMER:
      return {
        ...state,
        secondsElapsed: state.secondsElapsed + 1
      };
    case types.START_BREAK:
      return {
        ...state,
        secondsElapsed: 0,
        clockTime: state.breakLength * 60,
        isBreakTime: true,
        isToday: state.isToday + 1
      };

    case types.UPDATE_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: action.value !== "" ? parseInt(action.value, 10) : "",
        clockTime:
          !state.isTimerRunning && !state.isTimerPaused && action.value !== ""
            ? parseInt(action.value, 10) * 60
            : state.clockTime
      };

    case types.UPDATE_BREAK_LENGTH:
      return {
        ...state,
        breakLength: action.value !== "" ? parseInt(action.value, 10) : ""
      };
    case types.TOGGLE_ALARM_SOUND:
      return { ...state, isAlarmON: !state.isAlarmON };

    default:
      return state;
  }
};
