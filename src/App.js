import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import QueDetailedPage from "./Pages/QueDetailedPage";
import Home from "./Pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/quedetail" Component={QueDetailedPage} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
