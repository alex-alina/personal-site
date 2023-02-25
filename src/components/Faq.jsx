import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqContent from "../utils/faqContent";
import gardenOne from "../assets/gardenOne.png";
import gardenTwo from "../assets/gardenTwo.jpg";
import gardenThree from "../assets/gardenThree.jpg";
import gardenOFour from "../assets/gardenFour.jpg";

export default function Faq() {
  const gardens = [gardenOne, gardenTwo, gardenThree, gardenOFour];

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignSelf="flex-start"
      marginTop={4}
      marginBottom={0}
      sx={{
        width: {
          mobile: "100%",
          tablet: "100%",
          laptop: "75%",
          desktop: "75%",
        },
      }}
    >
      <Typography variant="h4" align="left">
        More info
      </Typography>
      <Box>
        {faqContent.map((text) => (
          <Accordion key={text.question}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{text.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography align="left">{text.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">My Tiny Origami Gardens</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="flex"
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="space-around"
            alignItems="center"
          >
            {gardens.map((garden, index) => (
              <Box key={index}>
                <Box
                  component="img"
                  width={160}
                  height={200}
                  borderRadius={10}
                  src={garden}
                  alt={`origami garden ${index}`}
                />
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
