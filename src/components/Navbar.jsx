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

  const links = [
    { to: "/", label: "Home" },
    { to: "/illustrazioni", label: "Illustrazioni" },
    { to: "/racconti", label: "Almanacco dell'oca" },
    { to: "/biografia", label: "Biografia" },
    { to: "/contatti", label: "Contatti" },
  ];

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
        />

        <NavDropdown
          label="Almanacco dell'oca"
          to="/racconti"
          items={racconti}
          basePath="/racconti"
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
        {links.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
