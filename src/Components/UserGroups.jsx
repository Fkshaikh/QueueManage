import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const UserGroups = () => {
  const [isSelected, setisSelected] = useState(0);
  const theme = useTheme();
  return (
    <div>
      <ToggleButtonGroup
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          backgroundColor: theme.palette.secondary.main,
          height: "30px",
          justifyContent: "center",
          borderRadius: "20px",
        }}
      >
        <ToggleButton
          sx={{
            width: "50%",
            borderRadius: "20px !important",
            marginLeft: "5px",
            height: "10px",
            border: "none",
            backgroundColor:
              isSelected === 0
                ? theme.palette.bg1
                : theme.palette.secondary.main,
          }}
          onClick={() => setisSelected(0)}
          value="Current Group"
        >
          <Typography
            color={isSelected === 0 ? theme.palette.text1 : theme.palette.text3}
          >
            Current Group
          </Typography>
        </ToggleButton>
        <ToggleButton
          sx={{
            width: "50%",
            borderRadius: "20px !important",
            height: "10px",
            border: "none",
            marginRight: "5px",
            backgroundColor:
              isSelected === 1
                ? theme.palette.bg1
                : theme.palette.secondary.main,
          }}
          onClick={() => setisSelected(1)}
          value="Next Group"
        >
          <Typography
            color={isSelected === 1 ? theme.palette.text1 : theme.palette.text3}
          >
            Next Group
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default UserGroups;
