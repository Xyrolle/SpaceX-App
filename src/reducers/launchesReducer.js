import { LAUNCHES } from "../constants";

const launchesReducer = (state = [], action) => {
  switch (action.type) {
    case LAUNCHES.FETCH_LAUNCHES_SUCCESS:
      return [...state, ...action.launches];

    default:
      return state;
  }
};

export default launchesReducer;
