import React, { Component } from "react";
import Timer from "./Time";
import GroupButton from "./groupButton";
class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Timer />
        <GroupButton />
      </React.Fragment>
    );
  }
}

export default index;
