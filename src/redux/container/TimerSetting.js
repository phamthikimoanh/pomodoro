import { connect } from "react-redux";
import { updateSessionLength, updateBreakLength } from "../action/index";
import TimerSettings from "../../components/Setting";
//import timer from './../reducer/timer';

const mapStateToProps = state => {
  // return {
  //   sessionLength: state.setting.sessionLength,
  //   breakLength: state.setting.breakLength
  // };
  return {
    sessionLength: state.sessionLength,
    breakLength: state.breakLength
  };
};

const mapDispatchToProps = dispatch => ({
  updateSessionLength: value => {
    dispatch(updateSessionLength(value));
  },
  updateBreakLength: value => {
    dispatch(updateBreakLength(value));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(TimerSettings);
