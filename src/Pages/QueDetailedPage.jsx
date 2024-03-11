import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import DoneIcon from "@mui/icons-material/Done";
import CustomDrawer from "../Components/Drawer/CustomDrawer";
import { Box, Card, Typography } from "@mui/material";
import CustomCards from "../Components/Drawer/CustomCards";
import UserGroups from "../Components/UserGroups";
const QueDetailedPage = () => {
  return (
    <div>
      <Box
        Container
        sx={{
          padding: "50px",
          marginTop: "50px",
          display: "flex",
          gap: "20px",
          height: "100%",
        }}
      >
        <CustomDrawer
          items={["Add New", "Show Completed", "Add Time", "Mark Complete"]}
          icons={[
            <AddIcon sx={{ height: "24px", width: "24px" }} />,
            <CheckCircleIcon sx={{ height: "20px", width: "20px" }} />,
            <AccessAlarmsIcon sx={{ height: "20px", width: "20px" }} />,
            <DoneIcon sx={{ height: "20px", width: "20px" }} />,
          ]}
          avatarContent="H"
          title="TaskAction"
          subtitle="Manage your Task"
          moreOptionsText="More Options"
          drawerWidth={250}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <CustomCards />
          <UserGroups />
        </Box>
      </Box>
    </div>
  );
};

export default QueDetailedPage;
