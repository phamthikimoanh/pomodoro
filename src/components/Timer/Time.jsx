import React from "react";
import FormattedTime from "../constants/FormattedTime";

const Times = () => {
  return (
    <div className="times">
      <div className="times-content">
        <label id="timer-label">Session</label>
        <FormattedTime />
      </div>
    </div>
  );
};

export default Times;
