import React from "react";
import Header from "./components/constants/Header";
import TimerSetting from "../src/redux/container/TimerSetting";
import Timer from "./components/Timer/index";
import Footer from "./components/constants/Footer";
//import { connect } from "react-redux";

function App() {
  //const { clockTime } = props;
  return (
    <React.Fragment>
      <Header />
      <React.Fragment>
        <TimerSetting />
        <Timer />
      </React.Fragment>
      <Footer />
    </React.Fragment>
  );
}

export default App;

