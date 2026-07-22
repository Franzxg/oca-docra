import { useState, useRef } from "react";
import { Link } from "react-router";

export default function NavDropdown({ label, to, items, basePath }) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  function handleOpen() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpen(true);
  }

  function handleClose() {
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  }

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
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