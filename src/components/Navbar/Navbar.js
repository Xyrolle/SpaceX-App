import "./Navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className="avatar" />
    </div>
  );
};

export default Navbar;
