import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      marginTop={4}
      marginBottom={6}
      overflow="hidden"
      width="100%"
    >
      <Typography variant="h4">Let's chat!</Typography>

      <Typography mt={1} align="left">
        Message me on{" "}
        <Link
          href="https://www.linkedin.com/in/alina-rusu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>{" "}
        or get in touch by email at{" "}
        <Link
          href="mailto:alex.alina.rusu@gmail.com?subject=Hi Alina!"
          target="_blank"
          rel="noopener noreferrer"
        >
          alex.alina.rusu@gmail.com
        </Link>
        .
      </Typography>
    </Box>
  );
}
