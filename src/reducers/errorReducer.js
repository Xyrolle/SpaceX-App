import { LAUNCHES } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case LAUNCHES.FETCH_LAUNCHES_FAIL:
      return action.error;
    case LAUNCHES.FETCH_LAUNCHES:
    case LAUNCHES.FETCH_LAUNCHES_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
