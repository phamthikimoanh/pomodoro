import { fork, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "../action/actionTypes";
import { loadState, saveLocalState } from "../data/localStorage";
import * as actions from "../action";

function* getSetting() {
  let sessionLength = loadState("sessionLength");
  if (sessionLength) {
    yield put(actions.afterUpdateSessionLength(sessionLength));
  }
  let breakLength = loadState("breakLength");
  if (breakLength) {
    yield put(actions.afterUpdateBreakLength(breakLength));
  }
}

function* saveSetting(action) {
  console.log(action);
  if (action.type === types.LISTEN_UPDATE_SESSION_LENGTH) {
    saveLocalState("sessionLength", action.value);
    saveLocalState("clockTime", action.value * 60);
    yield put(actions.afterUpdateSessionLength(action.value));
  } else if (action.type === types.LISTEN_UPDATE_BREAK_LENGTH) {
    saveLocalState("breakLength", action.value);
    yield put(actions.afterUpdateBreakLength(action.value));
  }
  // else if (action.type === types.LISTEN_CHANGE_CLOCK_TIME) {
  //     saveLocalState('clockTime', action.value);
  // }
}

function* listenSessionSetting() {
  yield takeEvery(types.LISTEN_UPDATE_BREAK_LENGTH, saveSetting);
}

function* listenBreakSetting() {
  yield takeEvery(types.LISTEN_UPDATE_SESSION_LENGTH, saveSetting);
}

const settingSaga = [
  fork(getSetting),
  fork(listenSessionSetting),
  fork(listenBreakSetting)
];
export default settingSaga;
