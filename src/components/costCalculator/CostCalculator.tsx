import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

const CostCalculator: React.FC = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        backgroundColor: "#1c1c1c",
        color: "#fff",
        borderRadius: 2,
        mb: 10,
      }}
      elevation={3}
    >
      {/* Левый блок с текстом */}
      <Box sx={{ flex: 1 }} p={3} pl={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Подберите радиатор отопления за 54 секунды
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Пройдите тест и узнайте какой радиатор лучше всего подходит вам
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#ffffff",
            color: "#000",
            textTransform: "none",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          Подобрать
        </Button>
      </Box>

      {/* Правый блок с изображением */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/images/Все радиаторы в одной сцене 1.png"
          alt="Каменные радиаторы"
          style={{ width: "100%" }}
        />
      </Box>
    </Paper>
  );
};

export default CostCalculator;
