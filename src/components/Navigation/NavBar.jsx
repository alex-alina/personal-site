import DownloadIcon from "@mui/icons-material/Download";
import {
  AppBar,
  Box,
  Button,
  Link as MuiLink,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AlinaRusuCV from "../../assets/AlinaRusuCV.pdf";
import menuContent from "../../text/menuContent";
import SideMenu from "./SideMenu";

export default function NavBar() {
  return (
    <div>
      <AppBar position="static" backgroundcolor="primary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 0,
            marginX: "auto",
            width: {
              mobile: "80%",
              tablet: "90%",
              laptop: "75%",
              desktop: "75%",
            },
          }}
        >
          <Box
            sx={{
              display: {
                mobile: "block",
                tablet: "block",
                laptop: "none",
                desktop: "none",
              },
            }}
          >
            <SideMenu />
          </Box>
          <MuiLink
            underline="none"
            href={AlinaRusuCV}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="small"
              variant="outlined"
              endIcon={<DownloadIcon />}
              sx={(theme) => ({
                px: 3,
                borderRadius: 50,
                background: "#E8F6F3",
                borderColor: "#E8F6F3",
                color: theme.palette.primary.nav,
                "&:hover": {
                  background: "#D0ECE7",
                  borderColor: "#D0ECE7",
                  color: theme.palette.primary.dark,
                },
              })}
            >
              <Box
                sx={{
                  fontSize: 18,
                  display: {
                    mobile: "none",
                    tablet: "none",
                    laptop: "block",
                    desktop: "block",
                  },
                }}
              >
                Download
              </Box>
              <Box ml={1} fontSize={18}>
                CV
              </Box>
            </Button>
          </MuiLink>

          <Box
            sx={{
              display: {
                mobile: "none",
                tablet: "none",
                laptop: "block",
                desktop: "block",
              },
            }}
          >
            <List
              sx={{
                width: 280,
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {menuContent.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    px: 0,
                    color: "#16A085",
                    "&:hover": {
                      color: "#0E6655",
                      borderRadius: 50,
                      paddingTop: 0,
                      paddingBottom: 0,
                    },
                  }}
                >
                  <Link
                    to={item.route}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontSize: 26,
                      margin: "0 auto",
                    }}
                  >
                    {item.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
