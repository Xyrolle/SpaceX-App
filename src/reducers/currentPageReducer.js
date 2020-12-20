import { LAUNCHES } from "../constants";

const currentPageReducer = (state = 0, action) => {
  switch (action.type) {
    case LAUNCHES.NEXT_PAGE:
      return state + 1;
    default:
      return state;
  }
};

export default currentPageReducer;
