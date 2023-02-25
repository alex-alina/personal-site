import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import colors from "./colors";

let theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 20,
    h4: { color: colors.turquoise[5] },
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
    },
    secondary: {
      main: "#fff",
      dark: "#37474f",
    },
    textSecondary: {
      main: "#37474f",
    },
  },
  components: {
    // Name of the component
    // MuiButtonBase: {
    //   defaultProps: {
    //     // The props to change the default for.
    //     disableRipple: true, // No more ripple, on the whole application 💣!
    //   },
    // },

    MuiMenu: {
      styleOverrides: {
        paper: {
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "#fff",
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
      contained: {
        minWidth: "120px",
        backgroundColor: "#0098a6",
        borderRadius: "50px",
        border: "2px solid #0098a6",
        "&:hover": {
          backgroundColor: "#14a3ab !important",
          border: "2px solid #14a3ab",
        },
        color: "#fff",
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