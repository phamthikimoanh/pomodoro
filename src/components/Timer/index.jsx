import React, { Component } from "react";
import Timer from "./Timer";
import GroupButton from "./groupButton";
import Sound from "../../acsset/ring.mp3";

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

export default index;
