import * as actions from "../action";
import { loadState, saveLocalState } from "../data/localStorage";
import { fork, put, takeEvery } from "@redux-saga/core/effects";

function* getHistories() {
  //load dữ liệu từ local store ra
  const histories = loadState("histories");
  if (histories) {
    // Đẩy dữ liệu qua redux.
    yield put(actions.getAllHistoriesFromStore(histories));
  }
}

export function* addHistory(action) {
  const { histories, history } = action.payload;
  let lastHistories = histories.concat(history);
  saveLocalState("histories", lastHistories);
  // Sau khi lưu vào local store thì đẩy vào redux để update trạng thái của redux.
  yield put(actions.addHistory(history));
}

export function* listenAddHistory() {
  yield takeEvery("LISTEN_SAVE_HISTORY", addHistory);
  // Luôn lắng nghe khi có action: LISTEN_SAVE_HISTORY để thực thi hàm addHistory
}

const historySaga = [fork(getHistories), fork(listenAddHistory)];
export default historySaga;
