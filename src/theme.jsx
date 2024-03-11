import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009963",
    },
    secondary: {
      main: "#F5F0E5",
    },
    text1: "#1C170D",
    text2: "#FFFFFF",
    text3: "#A1824A",
    bg1: "#FFFFFF",
    bg2: "#FBFAF7",
  },
  typography: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "16px",
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.25rem",
    },
    h5: {
      fontSize: "0.9rem",
    },
    h6: {
      fontSize: "0.7rem",
    },
  },
});

export default theme;
