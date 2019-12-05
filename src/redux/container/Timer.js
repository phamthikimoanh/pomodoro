import { connect } from "react-redux";
import {
  startTimer,
  stopTimer,
  resetTimer,
  runTimer,
  startBreak
  // autoStartTimer
} from "../action/index";
import PomodoroTimer from "../../components/Timer/index";

const mapStateToProps = state => {
  // return {
  //   clockTime: state.setting.clockTime,
  //   secondsElapsed: state.timer.secondsElapsed,
  //   isTimerRunning: state.timer.isTimerRunning,
  //   isTimerPaused: state.timer.isTimerPaused,
  //   isBreakTime: state.timer.isBreakTime,
  //   isAlarmON: state.timer.isAlarmON
  // };
  return {
    clockTime: state.clockTime,
    secondsElapsed: state.secondsElapsed,
    isTimerRunning: state.isTimerRunning,
    isTimerPaused: state.isTimerPaused,
    isBreakTime: state.isBreakTime,
    isAlarmON: state.isAlarmON
  };
};

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  stopTimer: () => dispatch(stopTimer()),
  resetTimer: () => dispatch(resetTimer()),
  runTimer: () => dispatch(runTimer()),
  startBreak: () => dispatch(startBreak())
  // autoStartTimer: () => dispatch(autoStartTimer())
});
export default connect(mapStateToProps, mapDispatchToProps)(PomodoroTimer);
