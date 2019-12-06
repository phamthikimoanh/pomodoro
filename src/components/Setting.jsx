import { connect } from "react-redux";
import {
  updateSessionLength,
  updateBreakLength,
  listenAddHistoryAction
} from "../redux/action";
import Counter from "../components/constants/Count";
import React from "react";

class SettingBlock extends React.PureComponent {
  handleBreakLength = value => {
    const { histories, updateBreakLength, listenAddHistoryAction } = this.props;
    if ((value > 0 && value <= 15) || value === "") {
      updateBreakLength(value);
      // localStorage.setItem("breakLength", value);
      listenAddHistoryAction(
        {
          title: "Change Break Length : " + value,
          timeChange: new Date()
        },
        histories
      );
    }
  };
  handleSessionLength = value => {
    const {
      histories,
      updateSessionLength,
      listenAddHistoryAction
    } = this.props;
    if ((value > 0 && value <= 60) || value === "") {
      updateSessionLength(value);
      // localStorage.setItem("sessionLength", value);
      listenAddHistoryAction(
        {
          title: "Change Session Length : " + value,
          timeChange: new Date()
        },
        histories
      );
    }
  };

  render() {
    const { sessionLength, breakLength } = this.props;
    return (
      <div className="setting-count container mt-1">
        <div className="d-flex justify-content-center ">
          <Counter
            value={sessionLength}
            onChange={event => this.handleSessionLength(event.target.value)}
            decrement={() =>
              this.handleSessionLength(parseInt(sessionLength) - 1)
            }
            increment={() =>
              this.handleSessionLength(parseInt(sessionLength) + 1)
            }
            title="Sesion Length"
            id="session-label"
            idNum="session-length"
            idBtnDecrement="session-decrement"
            idBtnIncrentment="session-increment"
          />
          <Counter
            value={breakLength}
            onChange={event => this.handleBreakLength(event.target.value)}
            decrement={() => this.handleBreakLength(parseInt(breakLength) - 1)}
            increment={() => this.handleBreakLength(parseInt(breakLength) + 1)}
            title="Break Length"
            id="break-label"
            idNum="break-length"
            idBtnDecrement="break-decrement"
            idBtnIncrentment="break-increment"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessionLength: state.timer.sessionLength,
    breakLength: state.timer.breakLength,
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
export default connect(mapStateToProps, mapDispatchToProps)(SettingBlock);
