import React from "react";
import { Link } from "react-router-dom";
// import useStyles from "./SideMenu.styles";
import menuContent from "../../utils/menuContent";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, IconButton } from "@mui/material";

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
        color="inherit"
        aria-label="side-menu"
        aria-controls="side-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="side-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuContent.map((item, index) => (
          <MenuItem onClick={handleClose} key={index}>
            <Link to={item.route}>{item.text}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
