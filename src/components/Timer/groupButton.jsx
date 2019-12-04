import React from "react";
import Button from "../constants/Button";
const GroupBtn = props => {
  const { isTimerRunning, onStart, onStop, onReset } = props;
  return (
    <div className="d-flex justify-content-center mt-5">
      {isTimerRunning ? (
        <Button
          id="stop"
          name="stop"
          value="Pause"
          nameButton="Pause"
          styles="general"
          onClick={onStop}
        />
      ) : (
        <Button
          id="start"
          name="start"
          value="Start"
          nameButton="Start"
          styles="general"
          onClick={onStart}
        />
      )}
      <Button
        id="reset"
        value="Reset"
        name="reset"
        nameButton="Reset"
        styles="general"
        onClick={onReset}
      />
    </div>
  );
};

export default GroupBtn;
