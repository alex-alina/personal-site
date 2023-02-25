import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProjectCard(props) {
  const {
    title,
    description,
    stack,
    openProjectBtn,
    gitHubBtn,
    image,
    projectLink,
    gitHubLink,
  } = props;

  return (
    <Card>
      <CardActionArea>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <CardMedia image={image} title="project cover image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="left">
              {title}
            </Typography>

            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              align="left"
            >
              {description}
            </Typography>

            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              align="left"
            >
              {stack}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>

      <CardActions>
        <Button size="medium" color="primary">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            {openProjectBtn}
          </a>
        </Button>

        <Button size="medium" color="primary">
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
            {gitHubBtn}
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
