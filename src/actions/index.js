import { LAUNCHES } from "../constants";

const fetchLaunchesAction = (page) => ({
  type: LAUNCHES.FETCH_LAUNCHES,
  page,
});

const setLaunches = (launches) => ({
  type: LAUNCHES.FETCH_LAUNCHES_SUCCESS,
  launches,
});

const setUpcomingLaunches = (upcomingLaunches) => ({
  type: LAUNCHES.FETCH_UPCOMING_LAUNCHES_SUCCESS,
  upcomingLaunches,
});

const setError = (error) => ({
  type: LAUNCHES.FETCH_LAUNCHES_FAIL,
  error,
});

const nextPage = () => ({
  type: LAUNCHES.NEXT_PAGE,
});

export {
  fetchLaunchesAction,
  setUpcomingLaunches,
  setLaunches,
  setError,
  nextPage,
};
