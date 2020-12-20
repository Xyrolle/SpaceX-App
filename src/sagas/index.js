import { all } from "redux-saga/effects";

import launchesSaga from "./launchesSaga";

export default function* rootSaga() {
  yield all([launchesSaga()]);
}
