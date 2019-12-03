import React from "react";

const Button = props => {
  return (
    <button
      value={props.value}
      onClick={props.onClick}
      id={props.id}
      className={"btn btn-outline-light btn-" + props.styles}
    >
      {props.nameButton}
    </button>
  );
};
export default Button;
