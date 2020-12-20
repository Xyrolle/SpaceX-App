import server_down from "../../images/server_down.png";

import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <img src={server_down} alt="something went wrong" />
      <p>
        Ooops! Something went wrong. Please, try <br /> again latter.
      </p>
    </div>
  );
};

export default Error;
