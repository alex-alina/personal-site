import React from "react";
// import useStyles from "./Intro.styles";
import AlinaRusuCV from "../../assets/AlinaRusuCV.pdf";
import { loadCSS } from "fg-loadcss";
// import Icon from "@material-ui/core/Icon";
import exercism from "../../assets/exercism.png";
import { CssBaseline, Button, Typography } from "@mui/material";
export default function Intro() {
  // const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  return (
    // <React.Fragment>
    <>
      <CssBaseline />
      <section>
        <Typography>Alina Rusu</Typography>
        <Typography>Junior Full Stack Developer</Typography>
        <Typography>Based in Amsterdam</Typography>
        <div>
          <a
            href="https://github.com/alex-alina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            icon
            {/* <div className={classes.iconContainer}>
              <Icon className="fab fa-github" style={{ color: "#fff" }} />
            </div> */}
          </a>

          <a
            href="https://www.linkedin.com/in/alina-rusu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            icon
            {/* <div className={classes.iconContainer}>
              <Icon
                className="fab fa-linkedin-in"
                style={{ fontSize: 25, color: "#fff" }}
              />
            </div> */}
          </a>

          <a
            href="https://exercism.io/profiles/AlexAlina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src={exercism} alt="exercism-logo" />
            </div>
          </a>

          <Button size="small" variant="contained">
            <a href={AlinaRusuCV} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </div>
      </section>
    </>
    // </React.Fragment>
  );
}
