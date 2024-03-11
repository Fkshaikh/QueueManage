import { Box, Card, Typography, styled } from "@mui/material";
import React from "react";
import FlexBox from "../FlexBox";

const StyledCard = styled(Card)`
  height: 56px;
  width: 210px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledTypography = styled(Typography)`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  padding: 3px;
`;
const CustomCards = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <FlexBox>
        <StyledBox>
          <StyledCard>
            <StyledTypography>00</StyledTypography>
          </StyledCard>
          <Typography sx={{ textAlign: "center" }}>Hours</Typography>
        </StyledBox>
        <StyledBox>
          <StyledCard>
            <StyledTypography>00</StyledTypography>
          </StyledCard>
          <Typography sx={{ textAlign: "center" }}>Minutes</Typography>
        </StyledBox>{" "}
        <StyledBox>
          <StyledCard>
            <StyledTypography>00</StyledTypography>
          </StyledCard>
          <Typography sx={{ textAlign: "center" }}>Current Group</Typography>
        </StyledBox>{" "}
        <StyledBox>
          <StyledCard>
            <StyledTypography>00</StyledTypography>
          </StyledCard>
          <Typography sx={{ textAlign: "center" }}>Next Group</Typography>
        </StyledBox>
      </FlexBox>
    </Box>
  );
};

export default CustomCards;
