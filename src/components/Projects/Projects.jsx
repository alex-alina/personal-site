import React from "react";
// import useStyles from "./Projects.styles";
import projectsDescription from "../../utils/projectsDescription";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Grid, Typography } from "@mui/material";

export default function Projects() {
  // const classes = useStyles();
  const { projectOne, projectTwo, projectThree, projectFour, buttons } =
    projectsDescription;

  return (
    <div>
      <Typography align="left">Projects</Typography>

      <Grid container spacing={4}>
        <Grid item sm={12} md={6}>
          <ProjectCard
            title={projectOne.title}
            description={projectOne.description}
            image={projectOne.image}
            openProjectBtn={buttons.openProject}
            gitHubBtn={buttons.gitHub}
            projectLink={projectOne.projectLink}
            gitHubLink={projectOne.gitHubLink}
          />
        </Grid>

        <Grid item sm={12} md={6}>
          <ProjectCard
            title={projectThree.title}
            description={projectThree.description}
            image={projectThree.image}
            openProjectBtn={buttons.openProject}
            gitHubBtn={buttons.gitHub}
            projectLink={projectThree.projectLink}
            gitHubLink={projectThree.gitHubLink}
          />
        </Grid>

        <Grid item sm={12} md={6}>
          <ProjectCard
            title={projectTwo.title}
            description={projectTwo.description}
            image={projectTwo.image}
            openProjectBtn={buttons.openProject}
            gitHubBtn={buttons.gitHub}
            projectLink={projectTwo.projectLink}
            gitHubLink={projectTwo.gitHubLink}
          />
        </Grid>

        <Grid item sm={12} md={6}>
          <ProjectCard
            title={projectFour.title}
            description={projectFour.description}
            image={projectFour.image}
            openProjectBtn={buttons.openProject}
            gitHubBtn={buttons.gitHub}
            projectLink={projectFour.projectLink}
            gitHubLink={projectFour.gitHubLink}
          />
        </Grid>
      </Grid>
    </div>
  );
}
