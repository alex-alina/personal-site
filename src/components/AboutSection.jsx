import { Box, Typography } from "@mui/material";
import React from "react";
import profilePic from "../assets/profilePic.jpg";
import aboutContent from "../text/aboutContent";
import Contact from "./Contact";
import Faq from "./Faq";

export default function AboutSection() {
  const { greeting, intro, ...rest } = aboutContent;

  return (
    <Box
      sx={() => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginX: "auto",
        marginTop: 4,
        overflow: "hidden",
        width: {
          mobile: "80%",
          tablet: "90%",
          laptop: "70%",
          desktop: "65%",
        },
      })}
    >
      <Box
        component="section"
        sx={{
          display: "flex",
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
          margin: "0 auto",
          overflow: "hidden",
          flexDirection: {
            mobile: "column",
            tablet: "column",
            laptop: "row",
            desktop: "row",
          },
        }}
      >
        <Box
          sx={{
            width: {
              mobile: "100%",
              tablet: "100%",
              laptop: "75%",
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
          {Object.values(rest).map((p, i) => {
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

        <Box>
          <Box
            component="img"
            width="200px"
            borderRadius={5}
            src={profilePic}
            alt="profile"
          />
        </Box>
      </Box>
      <Faq />
      <Contact />
    </Box>
  );
}
