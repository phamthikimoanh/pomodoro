import React, { Component } from "react";
import Timer from "./Timer";
import GroupButton from "./groupButton";
import Sound from "../../acsset/ring.mp3";
import {
  resetTimer,
  runTimer,
  startBreak,
  startTimer,
  stopTimer
} from "../../redux/action";
import { connect } from "react-redux";
import img from "../../acsset/images/tomato0.png";
import img1 from "../../acsset/images/tomato1.png";
import img2 from "../../acsset/images/tomato2.png";

class index extends Component {
  constructor(props) {
    super(props);
    this.alarmRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const currentProps = this.props;
    const {
      secondsElapsed,
      clockTime,
      isBreakTime,
      resetTimer,
      isAlarmON
    } = currentProps;
    console.log(clockTime, "thời gian bây giờ");
    localStorage.setItem("clockTime", clockTime);
    // start timer
    if (currentProps.isTimerRunning && !prevProps.isTimerRunning) {
      this.timerID = setInterval(() => {
        currentProps.runTimer();
      }, 1000);
    }

    // stop timer
    if (!currentProps.isTimerRunning && prevProps.isTimerRunning) {
      clearInterval(this.timerID);
    }

    // start break time, play alarm sound
    if (secondsElapsed === clockTime && !isBreakTime) {
      if (isAlarmON) {
        this.alarmRef.current.play();
      }
      currentProps.startBreak();
    }

    // after break time reset or restart timer, play alarm sound
    if (secondsElapsed === clockTime && isBreakTime) {
      if (isAlarmON) {
        this.alarmRef.current.play();
      }
      resetTimer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    const {
      clockTime,
      secondsElapsed,
      isTimerRunning,
      isTimerPaused,
      isBreakTime
    } = this.props;
    const { startTimer, stopTimer, resetTimer } = this.props;

    return (
      <React.Fragment>
        <Timer
          clockTime={clockTime}
          secondsElapsed={secondsElapsed}
          isTimerRunning={isTimerRunning}
          isTimerPaused={isTimerPaused}
          isBreakTime={isBreakTime}
          bg={isBreakTime === true ? img2 : isTimerRunning ? img1 : img}
        />
        <GroupButton
          isTimerRunning={isTimerRunning}
          onStart={startTimer}
          onStop={stopTimer}
          onReset={resetTimer}
        />
        <audio src={Sound} ref={this.alarmRef} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    clockTime: state.timer.clockTime,
    secondsElapsed: state.timer.secondsElapsed,
    isTimerRunning: state.timer.isTimerRunning,
    isTimerPaused: state.timer.isTimerPaused,
    isBreakTime: state.timer.isBreakTime,
    isAlarmON: state.timer.isAlarmON
  };
};

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  stopTimer: () => dispatch(stopTimer()),
  resetTimer: () => dispatch(resetTimer()),
  runTimer: () => dispatch(runTimer()),
  startBreak: () => dispatch(startBreak())
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
