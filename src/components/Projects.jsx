import { Box, Typography } from "@mui/material";
import React from "react";
import projectsDescription from "../text/projectsDescription";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Box component="section" display="flex" flexDirection="column">
      <Typography component="h2" variant="h4" mb={2} talign="left">
        Projects
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            mobile: "center",
            tablet: "center",
            laptop: "space-between",
            desktop: "space-between",
          },
          alignItems: {
            mobile: "center",
            tablet: "center",
            laptop: "flex-start",
            desktop: "flex-start",
          },
          flexDirection: {
            mobile: "column",
            tablet: "column",
            laptop: "row",
            desktop: "row",
          },
        }}
      >
        {Object.values(projectsDescription).map((project, i) => {
          const {
            title,
            description,
            image,
            openProjectBtn,
            gitHubBtn,
            projectLink,
            gitHubLink,
          } = project;
          return (
            <ProjectCard
              title={title}
              description={description}
              image={image}
              openProjectBtn={openProjectBtn}
              gitHubBtn={gitHubBtn}
              projectLink={projectLink}
              gitHubLink={gitHubLink}
            />
          );
        })}
      </Box>
    </Box>
  );
}
