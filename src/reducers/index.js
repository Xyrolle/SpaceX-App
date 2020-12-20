import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import launchesReducer from "./launchesReducer";
import upcomingLaunchesReducer from "./upcomingLaunchesReducer";
import currentPageReducer from "./currentPageReducer";

const rootReducer = combineReducers({
  launches: launchesReducer,
  upcomingLaunches: upcomingLaunchesReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  currentPage: currentPageReducer,
});

export default rootReducer;
