import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import PopUpDialog1 from "../Components/PopUpDialog1";
import CustomTable from "../Components/CustomTable";

const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isEmpty, setisEmpty] = React.useState(false);
  const customTableData = [
    { header: "Queue 1", time: "11:00 AM" },
    { header: "Queue 2", time: "2:30 PM" },
    { header: "Queue 3", time: "5:00 PM" },
  ];
  return (
    <Box
      sx={{
        marginTop: "100px",
        maxWidth: "70%",
        padding: "3%",
        marginLeft: "12%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Welcome Back !
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
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
          onClick={() => setOpen(true)}
        >
          <Typography
            variant="h6"
            sx={{
              "&:hover": {
                color: theme.palette.text1,
              },
            }}
          >
            Create
          </Typography>
        </Button>
        <Button
          color="secondary"
          sx={{
            color: theme.palette.text1,
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          <Typography variant="h6">Delete</Typography>
        </Button>
      </Box>
      {isEmpty ? (
        <Box
          sx={{
            border: `3px dashed ${theme.palette.secondary.main}`,
            padding: "100px",
          }}
        >
          <Typography
            variant="h5"
            color={theme.palette.text4}
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            You have no Queue
          </Typography>
        </Box>
      ) : (
        <>
          {customTableData.map((data, index) => (
            <CustomTable key={index} header={data?.header} time={data?.time} />
          ))}
        </>
      )}
      {open && <PopUpDialog1 open={open} setOpen={setOpen} />}
    </Box>
  );
};

export default Home;
