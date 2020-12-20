import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import {
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectLaunches,
  selectUpcomingLaunches,
} from "../../selectors";
import { fetchLaunchesAction, nextPage } from "../../actions";

import Error from "../Error/Error";

import LaunchCard from "../../components/LaunchCard/LaunchCard";
import LaunchCardSkeleton from "../../components/LaunchCardSkeleton/LaunchCardSkeleton";
import Separator from "../../components/Separator/Separator";

import see_more from "../../images/see_more.svg";

import "./Launches.css";

const Launches = () => {
  const launches = useSelector(selectLaunches);
  const upcomingLaunches = useSelector(selectUpcomingLaunches);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);

  const handleFetchMore = () => {
    dispatch(nextPage());
  };

  useEffect(() => {
    dispatch(fetchLaunchesAction(currentPage));
  }, [currentPage]);

  const dispatch = useDispatch();

  return (
    <>
      {isLoading ? (
        <>
          <Separator title="Upcoming" />
          {[1, 2, 3].map((i) => (
            <LaunchCardSkeleton key={uuid_v4()} />
          ))}
          <Separator title="History" />
          {[1, 2, 3].map((i) => (
            <LaunchCardSkeleton key={uuid_v4()} />
          ))}
        </>
      ) : error ? (
        <Error />
      ) : (
        <>
          <Separator title="Upcoming" />
          {isLoading && <LaunchCardSkeleton />}
          {upcomingLaunches.map((launchCard) => (
            <LaunchCard launchInfo={launchCard} key={uuid_v4()} />
          ))}
          <Separator title="History" />
          {launches.map((launchCard) => (
            <LaunchCard launchInfo={launchCard} key={uuid_v4()} />
          ))}
          <div className="seeMore" onClick={handleFetchMore}>
            <img src={see_more} alt="see more" />
            SEE MORE
          </div>
        </>
      )}
    </>
  );
};

export default Launches;
