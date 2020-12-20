import "./LaunchCard.css";

import article_link_icon from "../../images/article_link.svg";
import watch_icon from "../../images/watch_icon.svg";
import qm from "../../images/qm.png";

const LaunchCard = ({
  launchInfo: {
    links: { mission_patch, article_link, video_link },
    flight_number,
    mission_name,
    launch_success,
    launch_date_utc,
    details,
  },
}) => {
  return (
    <div className="launchCard">
      <div className="patch-container">
        <img
          src={mission_patch || qm}
          alt="mission patch"
          className="mission-patch"
        />
      </div>
      <div className="row">
        <span className="mission-number">#{flight_number}</span>
        <span className="mission-name">{mission_name}</span>
        <span
          className={`launch-result ${
            launch_success === null
              ? "upcoming"
              : launch_success
              ? "success"
              : "fail"
          }`}
        >
          {launch_success === null
            ? "UPCOMING"
            : launch_success
            ? "SUCCESS"
            : "FAILURE"}
        </span>
      </div>
      <div className="row">
        <span className="launch-date">Launch Date: {launch_date_utc}</span>
      </div>
      <div className="row">
        <p className="mission-details">{details}...</p>
        <a href={video_link} target="_blank" rel="noreferrer">
          <img src={watch_icon} alt="watch icon" className="watch-icon" />
          <span className="watch-text">WATCH</span>
        </a>
        <a href={article_link} target="_blank" rel="noreferrer">
          <img
            src={article_link_icon}
            alt="article link"
            className="article-link"
          />
        </a>
      </div>
    </div>
  );
};

export default LaunchCard;
