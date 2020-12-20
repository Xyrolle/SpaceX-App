import "./Separator.css";

const Separator = ({ title }) => {
  return (
    <div className="separator">
      <div className="launches-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Separator;
