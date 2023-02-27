import { Box } from "@mui/material";
import React from "react";
import Contact from "./Contact";
import Intro from "./Intro";
import Projects from "./Projects";

export default function Home() {
  return (
    <Box
      sx={() => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginX: "auto",
        marginTop: 4,
        overflow: "hidden",
        width: {
          mobile: "80%",
          tablet: "90%",
          laptop: "75%",
          desktop: "75%",
        },
      })}
    >
      <Intro />
      <Projects />
      <Contact />
    </Box>
  );
}
