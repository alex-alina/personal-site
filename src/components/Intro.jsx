import { Box, CssBaseline, Icon, Link, Typography } from "@mui/material";
import { loadCSS } from "fg-loadcss";
import React from "react";
import ExercismSvg from "./ExercismSvg";

export default function Intro() {
  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        component="section"
        display="flex"
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="space-between"
        alignItems="flex-start"
        marginTop={[0, 0, 2, 2]}
        marginBottom={6}
        overflow="hidden"
        width="100%"
      >
        <Box>
          <Typography variant="h4" mb={1}>
            Alina Rusu
          </Typography>
          <Typography lineHeight={1.5}>Front End Developer</Typography>
          <Typography lineHeight={1.5}>Based in Montreal</Typography>
        </Box>

        <Box display="flex" mr={2} mt={[2, 2, 0, 0]}>
          <Link
            href="https://github.com/alex-alina/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            mr={1}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                width: "40px",
                height: "40px",
                marginRight: "10px",
                padding: 0,
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
                "&$visited": {
                  backgroundColor: theme.palette.primary.main,
                },
              })}
            >
              <Icon
                className="fab fa-github"
                style={{ fontSize: 25, color: "#fff" }}
              />
            </Box>
          </Link>

          <Link
            href="https://www.linkedin.com/in/alina-rusu/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            mr={1}
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                width: "40px",
                height: "40px",
                marginRight: "10px",
                padding: 0,
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
                "&$visited": {
                  backgroundColor: theme.palette.primary.main,
                },
              })}
            >
              <Icon
                className="fab fa-linkedin-in"
                style={{ fontSize: 24, color: "#fff" }}
              />
            </Box>
          </Link>
          <Link
            href="https://exercism.io/profiles/AlexAlina"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Box
              sx={(theme) => ({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                width: "40px",
                height: "40px",
                marginRight: "10px",
                padding: 0,
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
                "&$visited": {
                  backgroundColor: theme.palette.primary.main,
                },
              })}
            >
              <ExercismSvg width={30} height={30} fill="white" />
            </Box>
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );
}
