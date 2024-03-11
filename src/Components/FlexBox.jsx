import { Box } from "@mui/material";
import React from "react";

const FlexBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {children}
    </Box>
  );
};

export default FlexBox;
