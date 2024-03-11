import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Avatar, Button, useTheme } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const NavBar = () => {
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.bg1,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AcUnitIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: theme.palette.text1,
                }}
              />
              <Typography
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  color: theme.palette.text1,
                  textDecoration: "none",
                }}
              >
                Queue Management System
              </Typography>
            </Box>

            {/* Mobile Size */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "space-between", md: "none" },
                position: "absolute",
              }}
            >
              <AcUnitIcon
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  color: theme.palette.text1,
                }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  color: theme.palette.text1,
                  textDecoration: "none",
                }}
              >
                QMS
              </Typography>
            </Box>

            {/* Profile  */}
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    color: theme.palette.text2,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "5px",
                    "&:hover": {
                      color: theme.palette.text1,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      "&:hover": {
                        color: theme.palette.text1,
                      },
                    }}
                  >
                    Add Task
                  </Typography>
                </Button>
                <Button
                  color="secondary"
                  sx={{
                    color: theme.palette.text1,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: "5px",
                  }}
                >
                  <Typography variant="h6">Settings</Typography>
                </Button>
              </Box>

              <Tooltip
                title="Profile"
                PopperProps={{
                  style: { fontSize: theme.typography.h6.fontSize },
                }}
              >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>H</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
