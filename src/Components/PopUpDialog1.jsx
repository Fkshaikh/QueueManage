import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Avatar,
  Box,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CustomStepper from "./CustomStepper";
import CustomSelect from "./CustomSelect";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
  marginTop: "10px",
});

const PopUpDialog1 = ({ open, setOpen }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <Box
          sx={{
            width: "600px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <DialogTitle>Create New Queue</DialogTitle>
          <CustomStepper activeStep={activeStep} />
          <Box
            sx={{
              height: "50%",
            }}
          >
            {activeStep === 0 ? (
              <StyledBox>
                <Avatar  sx={{ bgcolor: theme.palette.primary.main }}>H</Avatar>
                <TextField variant="outlined" label="New Queue Name" />
              </StyledBox>
            ) : activeStep === 1 ? (
              <StyledBox>
                <Avatar  sx={{ bgcolor: theme.palette.primary.main }}>H</Avatar>
                <CustomSelect />
              </StyledBox>
            ) : activeStep === 2 ? (
              <StyledBox>
                <TaskAltIcon
                  sx={{
                    height: "100px",
                    width: "100px",
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography variant="h5" fontWeight="700">
                  Queue Created SuccessFully !
                </Typography>
              </StyledBox>
            ) : (
              <></>
            )}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <DialogActions>
              <Button
                onClick={
                  activeStep === 0
                    ? handleClose
                    : () => setActiveStep(activeStep - 1)
                }
              >
                {activeStep === 0 ? <>cancel</> : <>back</>}
              </Button>
              <Button
                onClick={() => setActiveStep(activeStep + 1)}
                type={activeStep === 3 ? "submit" : "button"}
              >
                {activeStep === 2 ? <>Finish</> : <>next</>}
              </Button>
            </DialogActions>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default PopUpDialog1;
