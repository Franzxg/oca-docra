import { useState } from "react";
import { Link } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../imgs/logo-home.png";
import NavDropdown from "./NavDropdown";
import { illustrazioni } from "../data/illustrazioniData.js";
import { racconti } from "../data/raccontiData.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-navbar" />
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        <NavDropdown
          label="Illustrazioni"
          to="/illustrazioni"
          items={illustrazioni}
          basePath="/illustrazioni"
          variant="desktop"
        />

        <NavDropdown
          label="Almanacco dell'oca"
          to="/racconti"
          items={racconti}
          basePath="/racconti"
          variant="desktop"
        />

        <Link to="/biografia">Biografia</Link>
        <Link to="/contatti">Contatti</Link>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        className={`navbar-mobile-menu ${menuOpen ? "navbar-mobile-menu-open" : ""}`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <NavDropdown
          label="Illustrazioni"
          to="/illustrazioni"
          items={illustrazioni}
          basePath="/illustrazioni"
          variant="mobile"
          onNavigate={() => setMenuOpen(false)}
        />

        <NavDropdown
          label="Almanacco dell'oca"
          to="/racconti"
          items={racconti}
          basePath="/racconti"
          variant="mobile"
          onNavigate={() => setMenuOpen(false)}
        />

        <Link to="/biografia" onClick={() => setMenuOpen(false)}>
          Biografia
        </Link>
        <Link to="/contatti" onClick={() => setMenuOpen(false)}>
          Contatti
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
