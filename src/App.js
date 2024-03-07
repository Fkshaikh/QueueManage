import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import Main from "./Pages/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
