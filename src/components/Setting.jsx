import React from "react";
import Couter from "./constants/Count";

function hadleSessionLength(value, dispatchSessionUpdate) {
  if ((value > 0 && value <= 60) || value === "") {
    dispatchSessionUpdate(value);
    localStorage.setItem("sessionLength", value);
  }
  console.log("value là SessionLength:", value);
}
function hadleBreakLength(value, dispatchBreakUpdate) {
  if ((value > 0 && value <= 15) || value === "") {
    dispatchBreakUpdate(value);
    localStorage.setItem("breakLength", value);
  }
  console.log("value là BreakLength:", value);
}
function Setting(props) {
  //const { sessionLength, breakLength, isAlarmON, isAutoStartON } = props;
  const { updateSessionLength, updateBreakLength } = props;
  const { sessionLength, breakLength } = props;

  return (
    <div className="setting-count container mt-4">
      <div className="d-flex justify-content-center ">
        <Couter
          value={sessionLength}
          onChange={event =>
            hadleSessionLength(event.target.value, updateSessionLength)
          }
          decrement={() =>
            hadleSessionLength(sessionLength - 1, updateSessionLength)
          }
          increment={() =>
            hadleSessionLength(sessionLength + 1, updateSessionLength)
          }
          title="Sesion Length"
          id="session-label"
          idNum="session-length"
          idBtnDecrement="session-decrement"
          idBtnIncrentment="session-increment"
        />
        <Couter
          value={breakLength}
          onChange={event =>
            hadleBreakLength(event.target.value, updateBreakLength)
          }
          decrement={() => hadleBreakLength(breakLength - 1, updateBreakLength)}
          increment={() => hadleBreakLength(breakLength + 1, updateBreakLength)}
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
export default Setting;
