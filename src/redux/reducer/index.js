import setting from "./setting";
import timer from "./timer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  setting,
  timer
});

export default rootReducer;
