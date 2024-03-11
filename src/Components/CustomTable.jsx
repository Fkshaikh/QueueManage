import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const CustomTable = ({ header, subText, time }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "20px",
        borderRadius: "5px",
        marginTop: "10px",
        backgroundColor: theme.palette.bg2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          flexDirection: "column",
          flex: "8",
        }}
      >
        <Typography variant="h5" color={theme.palette.text4}>
          {header}
        </Typography>
        <Typography variant="h6" color={theme.palette.text3}>
          {subText || ""}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" color={theme.palette.text4}>
          Created At {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomTable;
