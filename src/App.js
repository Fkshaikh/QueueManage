import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider value={theme}>
      <div className="App">hi</div>
    </ThemeProvider>
  );
}

export default App;
