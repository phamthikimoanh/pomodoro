import React from "react";

function FormattedTime(props) {
  const { time } = props;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const clockTime = `${minutes < 10 ? `0${minutes}` : minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  // set document title with clock time
  document.title = clockTime;
  return <span id="time-left">{clockTime}</span>;
}

export default FormattedTime;
