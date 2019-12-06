import React from "react";
import Header from "./components/constants/Header";
import TimerSetting from "./components/Setting";
import PomodoroTimer from "./redux/container/Timer";
import Footer from "./components/constants/Footer";
import  History from "./redux/container/histories"
function App() {
  return (
    <React.Fragment>
      <Header />
      <React.Fragment>
        <TimerSetting />
        <PomodoroTimer />
        <History/>
      </React.Fragment>
      <Footer />
    </React.Fragment>
  );
}

export default App;
