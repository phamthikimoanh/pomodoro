import React from "react";
import FormattedTime from "../constants/FormattedTime";

const Timer = props => {
  const { clockTime, secondsElapsed, bg } = props;
  const time = clockTime - secondsElapsed;
  //console.log("time: ", time);

  return (
    <div className="times">
      <div
        className="times-content"
        style={{
          background: `url(${bg})`
        }}
      >
        <label id="timer-label">Session</label>
        <FormattedTime time={time} />
      </div>
    </div>
  );
};
export default Timer;
