import { createSelector } from "reselect";

const getIsLoading = (state) => state.isLoading;
const getLaunches = (state) => state.launches;
const getUpcomingLaunches = (state) => state.upcomingLaunches;
const getError = (state) => state.error;
const getCurrentPage = (state) => state.currentPage;

const selectIsLoading = createSelector(
  [getIsLoading],
  (getIsLoading) => getIsLoading
);

const selectLaunches = createSelector(
  [getLaunches],
  (getLaunches) => getLaunches
);

const selectUpcomingLaunches = createSelector(
  [getUpcomingLaunches],
  (getUpcomingLaunches) => getUpcomingLaunches
);

const selectError = createSelector([getError], (getError) => getError);

const selectCurrentPage = createSelector(
  [getCurrentPage],
  (getCurrentPage) => getCurrentPage
);

export {
  selectLaunches,
  selectUpcomingLaunches,
  selectIsLoading,
  selectError,
  selectCurrentPage,
};
