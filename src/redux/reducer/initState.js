const initState = {
  breakLength: 5,
  sessionLength: 25,
  clockTime: 1500,
  secondsElapsed: 0,
  isTimerRunning: false,
  isTimerPaused: false,
  isBreakTime: false,
  isAlarmON: true,
  isToday: 0
};
// initState.breakLength = localStorage.getItem("breakLength");
// initState.sessionLength = localStorage.getItem("sessionLength");
// initState.clockTime = localStorage.getItem("clockTime");
// if (initState.breakLength === null) {
//   initState.breakLength = 5;
// }
// if (initState.sessionLength === null) {
//   initState.sessionLength = 25;
// }
// if (initState.clockTime === null) {
//   initState.clockTime = 1500;
// }
export default initState;
