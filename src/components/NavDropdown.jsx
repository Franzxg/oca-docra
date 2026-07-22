import { useState } from "react";
import { Link } from "react-router";
import Popover from "@mui/material/Popover";

export default function NavDropdown({ label, to, items, basePath }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  return (
    <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
      <Link to={to}>{label}</Link>

      <Popover
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        disableRestoreFocus
        onClose={handlePopoverClose}
        slotProps={{
          paper: {
            onMouseEnter: handlePopoverOpen,
            onMouseLeave: handlePopoverClose,
            className: "nav-dropdown-paper",
            sx: { pointerEvents: "auto" },
          },
        }}
      >
        <div className="nav-dropdown-list">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`${basePath}/${item.slug}`}
              className="nav-dropdown-item"
              onClick={handlePopoverClose}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Popover>
    </div>
  );
}