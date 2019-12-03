import { connect } from "react-redux";
import {
  updateSessionLength,
  updateBreakLength
  //   toggleAlarmSound,
  //   toggleAutoStart
} from "../action/index";
import TimerSettings from "../../components/Setting";

const mapStateToProps = state => {
  console.log(state.setting.sessionLength);
  console.log(state.setting.breakLength);

  return {
    sessionLength: state.setting.sessionLength,
    breakLength: state.setting.breakLength
    // isAlarmON: state.timer.isAlarmON,
    // isAutoStartON: state.timer.isAutoStartON
  };
};

const mapDispatchToProps = dispatch => ({
  updateSessionLength: value => {
    dispatch(updateSessionLength(value));
  },
  updateBreakLength: value => {
    dispatch(updateBreakLength(value));
  }
  //   toggleAlarmSound: () => dispatch(toggleAlarmSound()),
  //   toggleAutoStart: () => dispatch(toggleAutoStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(TimerSettings);
