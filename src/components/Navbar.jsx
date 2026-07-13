import { Link } from "react-router";
import logo from "../imgs/logo-home.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-navbar" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/illustrazioni">Illustrazioni</Link>
        <Link to="/racconti">Almanacco dell'oca</Link>
        <Link to="/biografia">Biografia</Link>
        <Link to="/contatti">Contatti</Link>
      </div>
    </nav>
  );
}

export default Navbar;
