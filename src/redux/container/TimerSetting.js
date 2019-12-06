import { connect } from "react-redux";
import { updateSessionLength, updateBreakLength } from "../action/timerSetting";
import { listenAddHistoryAction } from "../action/histories";
import TimerSettings from "../../components/Setting";
//import timer from './../reducer/timer';

const mapStateToProps = state => {
  // return {
  //   sessionLength: state.setting.sessionLength,
  //   breakLength: state.setting.breakLength
  // };
  return {
    sessionLength: state.sessionLength,
    breakLength: state.breakLength,
    histories: state.histories.histories
  };
};

const mapDispatchToProps = dispatch => ({
  updateSessionLength: value => {
    dispatch(updateSessionLength(value));
  },
  updateBreakLength: value => {
    dispatch(updateBreakLength(value));
  },
  listenAddHistoryAction: (history, histories) => {
    dispatch(listenAddHistoryAction(history, histories));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(TimerSettings);
