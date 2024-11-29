import { Box, Paper, Typography } from "@mui/material";
import { FC } from "react";

const EstimatedCostCalculation: FC = () => {
  return (
    <Box mt={15} mb={15}>
      <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
        Ориентировочный расчет стоимости отопления от Heat Stone
      </Typography>
      <Paper elevation={5} sx={{ width: "100%", p: 5, mt: 3 }}></Paper>
    </Box>
  );
};

export default EstimatedCostCalculation;
