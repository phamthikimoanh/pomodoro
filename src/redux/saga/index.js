import { watchIncrementAsync, watchDecrementAsync } from "./setting";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}
