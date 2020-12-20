import { LAUNCHES } from "../constants";

const upcomingLaunchesReducer = (state = [], action) => {
  switch (action.type) {
    case LAUNCHES.FETCH_UPCOMING_LAUNCHES_SUCCESS:
      return [...state, ...action.upcomingLaunches];

    default:
      return state;
  }
};

export default upcomingLaunchesReducer;
