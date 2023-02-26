import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import menuContent from "../../text/menuContent";

export default function SideMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="primary"
        aria-label="side-menu"
        aria-controls="side-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        width="90%"
        id="side-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuContent.map((item, index) => (
          <MenuItem onClick={handleClose} key={index}>
            <Link
              to={item.route}
              style={{
                textDecoration: "none",
                color: "#138D75",
                fontSize: 24,
              }}
            >
              {item.text}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
