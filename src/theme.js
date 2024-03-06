import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // Define your theme properties here
  palette: {
    primary: {
      main: "#009963",
    },
    secondary: {
      main: "#F5F0E5",
    },
    text1: "1C170D",
    text2: "FFFFFF",
  },
  typography: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: "700",
    fontStyle: "normal",
  },
});

export default theme;
