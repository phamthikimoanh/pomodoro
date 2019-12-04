import React from "react";
import Header from "./components/constants/Header";
import TimerSetting from "../src/redux/container/TimerSetting";
import PomodoroTimer from "./redux/container/Timer";
import Footer from "./components/constants/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <React.Fragment>
        <TimerSetting />
        <PomodoroTimer />
      </React.Fragment>
      <Footer />
    </React.Fragment>
  );
}

export default App;
