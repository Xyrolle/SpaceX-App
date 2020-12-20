import "../LaunchCard/LaunchCard.css";
import "./LaunchCardSkeleton.css";

const LaunchCardSkeleton = () => {
  return (
    <div className="launchCard skeleton">
      <div className="patch-container">
        <div className="mission-patch placeholder" />
      </div>
      <div className="row">
        <span className="mission-name placeholder" />
        <span className="launch-result placeholder" />
      </div>
      <div className="row">
        <span className="launch-date placeholder" />
      </div>
      <div className="row">
        <div className="mission-details placeholder" />
      </div>
    </div>
  );
};

export default LaunchCardSkeleton;
