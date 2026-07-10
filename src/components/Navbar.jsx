import { Link } from "react-router";
import Home from "../routes/home";
import HomeLogo from "./HomeLogo";
import logo from "../imgs/logo-home.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="div-navbar">
        <Link to="/illustrazioni">Illustrazioni</Link>
        <Link to="/racconti">Almanacco dell'oca</Link>
        <Link to="/biografia">Biografia</Link>
        <Link to="/contatti">Contatti</Link>
      </div>
      <div className="div-navbar">
        <img src={logo} alt="Logo" className="logo-navbar" />
      </div>
      <div className="div-navbar">
        <a
          href="https://www.instagram.com/ocadocra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://www.behance.net/sofiacasavecchi1">Behance</a>
        <a href="https://ocadocra.substack.com">Substack</a>
        <a href="https://ko-fi.com/ocadocra">Ko-fi</a>
      </div>
    </nav>
  );
}

export default Navbar;
