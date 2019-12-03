import * as types from "../action/actionTypes";
//import initStateTimer from "./timer";
export const initStateSetting = {
  breakLength: 5,
  sessionLength: 25
};

const settings = (state = initStateSetting, action) => {
  switch (action.type) {
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

    case types.TOGGLE_AUTO_START:
      return {
        ...state,
        isAutoStartON: !state.isAutoStartON
      };
    default:
      return state;
  }
};
export default settings;
