import { LAUNCHES } from "../constants";

const loadingReducer = (state = null, action) => {
  switch (action.type) {
    case LAUNCHES.FETCH_LAUNCHES:
      return true;
    case LAUNCHES.FETCH_LAUNCHES_SUCCESS:
    case LAUNCHES.FETCH_LAUNCHES_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
