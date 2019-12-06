import {all} from "@redux-saga/core/effects";
import historySaga from "./history";
import settingSaga from "./setting";

export default function* rootSaga() {
    yield all([
        ...historySaga,
        ...settingSaga
    ])
}
