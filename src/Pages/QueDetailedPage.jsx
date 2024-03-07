import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import DoneIcon from "@mui/icons-material/Done";
import CustomDrawer from "../Components/Drawer/CustomDrawer";
import { Box, Typography } from "@mui/material";
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
        <Box>
          <Typography>
            Maple syrup is a syrup made from the sap of maple trees. In cold
            climates, these trees store starch in their trunks and roots before
            winter; the starch is then converted to sugar that rises in the sap
            in late winter and early spring. Maple trees are tapped by drilling
            holes into their trunks and collecting the sap, which is processed
            by heating to evaporate much of the water, leaving the concentrated
            syrup. Maple syrup was first made by the Indigenous peoples of
            Northeastern North America. The practice was adopted by European
            settlers, who gradually changed production methods. Technological
            improvements in the 1970s further refined syrup processing.
            Virtually all of the world's maple syrup is produced in Canada and
            the United States. The Canadian province of Quebec is the largest
            producer, responsible for 70 per cent of the world's output;
            Canadian exports of maple syrup in 2016 were C$487 million (about
            US$360 million), with Quebec accounting for some 90 per cent of this
            total.[1][2] Maple syrup is graded based on its colour and taste.
            Sucrose is the most prevalent sugar in maple syrup. In Canada,
            syrups must be made exclusively from maple sap to qualify as maple
            syrup and must also be at least 66 per cent sugar.[3] In the United
            States, a syrup must be made almost entirely from maple sap to be
            labelled as "maple", though states such as Vermont and New York have
            more restrictive definitions. Maple syrup is often used as a
            condiment for pancakes, waffles, French toast, oatmeal, or porridge.
            It is also used as an ingredient in baking and as a sweetener or
            flavouring agent. Culinary experts have praised its unique flavour,
            although the chemistry responsible is not fully understood.[4]
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default QueDetailedPage;
