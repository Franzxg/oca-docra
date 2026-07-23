import { useState, useRef } from "react";
import { Link } from "react-router";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NavDropdown({
  label,
  to,
  items,
  basePath,
  variant = "desktop",
}) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  function handleMouseOpen() {
    if (variant !== "desktop") return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpen(true);
  }

  function handleMouseClose() {
    if (variant !== "desktop") return;
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  }

  function handleToggleClick(event) {
    event.preventDefault();
    setOpen((prev) => !prev);
  }

  if (variant === "mobile") {
    return (
      <div className="nav-dropdown-mobile">
        <div className="nav-dropdown-mobile-header">
          <Link to={to} onClick={() => setOpen(false)}>
            {label}
          </Link>
          <button
            className={`nav-dropdown-toggle ${open ? "nav-dropdown-toggle-open" : ""}`}
            onClick={handleToggleClick}
            aria-label={open ? "Comprimi sottomenu" : "Espandi sottomenu"}
            aria-expanded={open}
          >
            <KeyboardArrowDownIcon />
          </button>
        </div>

        <div
          className={`nav-dropdown-mobile-list ${open ? "nav-dropdown-mobile-list-open" : ""}`}
        >
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`${basePath}/${item.slug}`}
              className="nav-dropdown-mobile-item"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={handleMouseOpen}
      onMouseLeave={handleMouseClose}
    >
      <Link to={to}>{label}</Link>

      <div className={`nav-dropdown-paper ${open ? "nav-dropdown-open" : ""}`}>
        <div className="nav-dropdown-list">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`${basePath}/${item.slug}`}
              className="nav-dropdown-item"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
