import { call, takeEvery, put } from "redux-saga/effects";

import { LAUNCHES } from "../constants";

import { setLaunches, setError, setUpcomingLaunches } from "../actions";

import { fetchLaunches } from "../api";

export function* handleFetchLaunches({ page }) {
  try {
    const launches = yield call(fetchLaunches, page);
    const upcomingLaunches = launches.filter((launch) => launch.upcoming);
    const notUpcomingLaunches = launches.filter((launch) => !launch.upcoming);
    yield put(setLaunches(notUpcomingLaunches));
    yield put(setUpcomingLaunches(upcomingLaunches));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchLaunchesLoad() {
  yield takeEvery(LAUNCHES.FETCH_LAUNCHES, handleFetchLaunches);
}
