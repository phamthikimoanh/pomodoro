import React from "react";
//import { Button, Icon } from "antd";

const Couter = props => {
  const {
    decrement,
    increment,
    title,
    id,
    idBtnIncrentment,
    idBtnDecrement,
    idNum,
    value,
    onChange
  } = props;
  return (
    <div className="cp-counter mx-5 text-center">
      <h4 className="title-h4" id={id}>
        {title}
      </h4>
      <input
        id={idBtnIncrentment}
        onClick={decrement}
        type="button"
        className="btn-counter"
        value="-"
      />

      <input
        id={idNum}
        className="spanNumber"
        type="number"
        min="1"
        max="60"
        value={value}
        name="session-length"
        onChange={onChange}
      />
      <input
        id={idBtnDecrement}
        onClick={increment}
        className="btn-counter"
        type="button"
        value="+"
      />
    </div>
  );
};
export default Couter;
