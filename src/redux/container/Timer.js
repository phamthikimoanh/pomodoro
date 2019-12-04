import { connect } from "react-redux";
import {
  startTimer,
  stopTimer,
  resetTimer,
  runTimer,
  startBreak,
  autoStartTimer
} from "../action/index";
import PomodoroTimer from "../../components/Timer/index";

const mapStateToProps = state => {
  console.log("currentTime: ", state.timer.clockTime);
  return {
    clockTime: state.timer.clockTime,
    secondsElapsed: state.timer.secondsElapsed,
    isTimerRunning: state.timer.isTimerRunning,
    isTimerPaused: state.timer.isTimerPaused,
    isBreakTime: state.timer.isBreakTime,
    isAutoStartON: state.timer.isAutoStartON,
    isAlarmON: state.timer.isAlarmON
  };
};

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  stopTimer: () => dispatch(stopTimer()),
  resetTimer: () => dispatch(resetTimer()),
  runTimer: () => dispatch(runTimer()),
  startBreak: () => dispatch(startBreak()),
  autoStartTimer: () => dispatch(autoStartTimer())
});
export default connect(mapStateToProps, mapDispatchToProps)(PomodoroTimer);
