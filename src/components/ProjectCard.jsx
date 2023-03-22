import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

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
    <Card
      sx={{
        mb: 6,
        width: {
          mobile: "100%",
          tablet: "80%",
          laptop: "47%",
          desktop: "47%",
        },
      }}
    >
      <CardActionArea>
        <Link
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <CardMedia
            image={image}
            title="project cover image"
            sx={{
              width: "auto",
              maxWidth: "95%",
              display: "block",
              height: "auto",
              minHeight: 310,
              objectFit: "fill",
              objectPosition: "center",
              margin: "auto",
            }}
          />
          <CardContent
            sx={{
              "&:last-child": {
                paddingBottom: "16px",
              },
            }}
          >
            <Typography gutterBottom variant="h5" component="h2" align="left">
              {title}
            </Typography>

            <Typography
              component="p"
              align="left"
              sx={(theme) => ({
                color: theme.palette.textSecondary.main,
                fontSize: 18,
              })}
            >
              {description}
            </Typography>

            <Typography
              component="p"
              align="left"
              sx={(theme) => ({
                color: theme.palette.textSecondary.main,
              })}
            >
              {stack}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>

      <CardActions>
        <Link
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <Button size="medium" color="primary">
            {openProjectBtn}
          </Button>
        </Link>

        <Link
          href={gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <Button size="medium" color="primary">
            {gitHubBtn}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
