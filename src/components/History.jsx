import { Timeline } from "antd";
import React from "react";
import moment from "moment";
import bg from "../acsset/images/tomato0.png";
import { connect } from "react-redux";

const History = props => {
  const { isToday, histories } = props;
  return (
    <Timeline>
      <h5 className="my-4">
        Session work today :{" "}
        <span style={BgSpan} id="isToday">
          {isToday}
        </span>
      </h5>
      <div className="histories" style={scroll}>
        {histories.map((e, i) => {
          return (
            <Timeline.Item key={"history_" + i}>
              <b>{e.title}</b> -{" "}
              {moment(e.timeChange).format("hh:mm:ss DD-MM-YYYY")}
            </Timeline.Item>
          );
        })}
      </div>
    </Timeline>
  );
};

const BgSpan = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "300px"
};
const scroll = {
  backgroundColor: "#df2c2c82",
  height: "50px",
  width: "100%",
  overflowY: "scroll",
  color: "rgb(255, 218, 218)",
  paddingLeft: "25px",
  fontWeight: "400"
};
// export default History;
const mapStateToProps = state => {
  console.log("isToday", state.timer.isToday);

  return {
    histories: state.histories.histories,
    isToday: state.timer.isToday
  };
};
export default connect(mapStateToProps)(History);
