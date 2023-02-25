import React from "react";
import { Link } from "react-router-dom";
// import useStyles from "./NavBar.styles";
import menuContent from "../../utils/menuContent";
import SideMenu from "./SideMenu";
import { AppBar, Toolbar, Hidden } from "@mui/material";

export default function NavBar() {
  // const classes = useStyles();

  return (
    <div>
      <AppBar position="static" backgroundcolor="primary">
        <Toolbar>
          <p color="secondary">
            Hello World{" "}
            <span role="img" aria-label="happy face emoji">
              😊
            </span>
          </p>

          <Hidden only={["lg", "xl"]}>
            <SideMenu />
          </Hidden>

          <Hidden only={["xs", "sm", "md"]}>
            <ul>
              {menuContent.map((item, index) => (
                <li key={index}>
                  <Link to={item.route}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
