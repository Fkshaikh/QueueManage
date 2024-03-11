import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Button, Typography, useTheme } from "@mui/material";

const CustomDrawer = ({
  items,
  icons,
  avatarContent,
  title,
  subtitle,
  moreOptionsText,
  drawerWidth,
}) => {
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState(null);

  const handleListItemClick = (index) => {
    setIsSelected(index);
  };

  const drawerContent = (
    <List
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {items.map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              backgroundColor:
                isSelected === index ? theme.palette.secondary.main : "",
              borderRadius: "5px",
            }}
            disableRipple
            onClick={() => handleListItemClick(index)}
          >
            <ListItemIcon sx={{ minWidth: "0" }}>
              {icons && icons[index]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
            mt: "20px",
          }}
        >
          {avatarContent && <Avatar>{avatarContent}</Avatar>}
          <Box>
            {title && <Typography>{title}</Typography>}
            {subtitle && (
              <Typography variant="h6" color={theme.palette.text3}>
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              position: "inherit",
              borderRight: "none",
              mt: "20px",
            },
          }}
          open
        >
          {drawerContent}

          {moreOptionsText && (
            <Button
              style={{ marginTop: "100%", borderRadius: "5px" }}
              variant="contained"
            >
              {moreOptionsText}
            </Button>
          )}
        </Drawer>
      </Box>
    </Box>
  );
};

export default CustomDrawer;
