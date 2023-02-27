import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import profilePic from "../assets/alina-rusu.jpg";
import aboutContent from "../text/aboutContent";
import Contact from "./Contact";
import Faq from "./Faq";

export default function AboutSection() {
  const { greeting, intro, ...content } = aboutContent;
  const [isVisible, setIsVisible] = useState(false);
  const display = isVisible ? "block" : "none";
  const showMoreToggle = () => setIsVisible(!isVisible);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginX: "auto",
        marginTop: [4, 4, 6, 6],
        overflow: "hidden",
        width: {
          mobile: "80%",
          tablet: "90%",
          laptop: "75%",
          desktop: "75%",
        },
      }}
    >
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: {
            mobile: "center",
            tablet: "center",
            laptop: "center",
            desktop: "space-between",
          },
          alignItems: {
            mobile: "center",
            tablet: "center",
            laptop: "center",
            desktop: "flex-start",
          },
          margin: "0 auto",
          overflow: "hidden",
          flexDirection: {
            mobile: "column",
            tablet: "column",
            laptop: "column",
            desktop: "row",
          },
        }}
      >
        <Box
          sx={{
            width: {
              mobile: "100%",
              tablet: "100%",
              laptop: "100%",
              desktop: "75%",
            },
          }}
        >
          <Typography
            variant="h4"
            mb={2}
            textAlign={["align-left", "align-left", "justify", "justify"]}
          >
            {greeting}
          </Typography>
          <Typography lineHeight={1.5} align="left">
            {intro}
          </Typography>
          <Box display={[display, display, "block", "block"]}>
            {Object.values(content).map((p, i) => {
              return (
                <Typography
                  key={i}
                  mt={2}
                  textAlign={["align-left", "align-left", "justify", "justify"]}
                >
                  {p}
                </Typography>
              );
            })}
          </Box>
          <Box display={["block", "block", "none", "none"]}>
            <Button
              size="large"
              endIcon={
                isVisible ? (
                  <ExpandLessOutlinedIcon />
                ) : (
                  <ExpandMoreOutlinedIcon />
                )
              }
              sx={(theme) => ({
                px: 0,
                borderRadius: 50,
                fontSize: 18,
                fontWeight: 300,
                color: theme.palette.primary.main,
              })}
              onClick={() => showMoreToggle()}
            >
              {isVisible ? `Show less` : `Read more`}
            </Button>
          </Box>
        </Box>

        <Box mt={[2, 2, 0, 0]}>
          <Box
            component="img"
            width={[220, 220, 220, 240]}
            borderRadius={50}
            src={profilePic}
            alt="profile"
            ml={[0, 0, 0, 6]}
          />
        </Box>
      </Box>
      <Faq />
      <Contact />
    </Box>
  );
}
