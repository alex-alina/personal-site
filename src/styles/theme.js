import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import colors from "./colors";

let theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 20,
    h4: { color: colors.turquoise[5], fontWeight: 300 },
    h5: { color: colors.grey[8] },
    body1: { color: colors.grey[8] },
    subtitle1: { color: colors.turquoise[5] },
  },
  breakpoints: {
    values: {
      mobile: 300,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    primary: {
      main: "#16A085",
      nav: "#138D75",
      dark: "#0B5345",
    },
    secondary: {
      main: "#fff",
    },
    textSecondary: {
      main: "#34495E",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "white",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: colors.turquoise[5],
          width: "90%",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.turquoise[6],
          "&:hover": {
            color: colors.turquoise[9],
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.turquoise[6],
          "&:hover": {
            color: colors.turquoise[9],
          },
        },
      },
    },
    MuiIcon: {
      root: {
        fontSize: "30px",
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          color: colors.grey[8],
          marginBottom: 24,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0 0 0 4",
          boxShadow:
            "0px 2px 1px -1px rgba(22, 160, 133,0.2),0px 1px 1px 0px rgba(22, 160, 133,0.14),0px 1px 3px 0px rgba(22, 160, 133,0.12)",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          color: colors.grey[8],
          boxShadow:
            "0px 2px 1px -1px rgba(22, 160, 133,0.2),0px 1px 1px 0px rgba(22, 160, 133,0.14),0px 1px 3px 0px rgba(22, 160, 133,0.12)",
        },
      },
    },
    MuiCollapse: {
      root: {
        boxShadow:
          "0px 2px 1px -1px rgba(22, 160, 133,0.2),0px 1px 1px 0px rgba(22, 160, 133,0.14),0px 1px 3px 0px rgba(22, 160, 133,0.12)",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 2px 1px -1px rgba(22, 160, 133,0.2),0px 1px 1px 0px rgba(22, 160, 133,0.14),0px 1px 3px 0px rgba(22, 160, 133,0.12)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
