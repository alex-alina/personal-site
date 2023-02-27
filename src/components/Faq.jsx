import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqContent, {
  workFeedback,
  workFeedbackTitle,
} from "../text/faqContent";
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
      marginTop={[4, 2, 2, 6]}
      marginBottom={0}
      sx={{
        width: {
          mobile: "100%",
          tablet: "100%",
          laptop: "100%",
          desktop: "75%",
        },
      }}
    >
      <Typography variant="h4" align="left" mb={2}>
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
          <Typography variant="subtitle1">{workFeedbackTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
            }}
          >
            {workFeedback.map((item, i) => {
              return (
                <li key={i}>
                  <Box display="flex">
                    <Box display="flex">
                      <Box
                        component="span"
                        fontSize={30}
                        color="#16A085"
                        mr={2}
                      >
                        &bull;
                      </Box>
                    </Box>
                    <Typography align="left" mt={1}>
                      {item}
                    </Typography>
                  </Box>
                </li>
              );
            })}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">My Tiny Origami Gardens</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="flex"
            flexDirection={["column", "row", "row", "row"]}
            justifyContent="space-around"
            alignItems="center"
            flexWrap="wrap"
          >
            {gardens.map((garden, index) => (
              <Box
                component="img"
                key={index}
                width={160}
                height={200}
                marginTop={[2, 2, 1, 1]}
                borderRadius={5}
                src={garden}
                alt={`origami garden ${index}`}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
