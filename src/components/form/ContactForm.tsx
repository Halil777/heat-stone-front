import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";

const ContactForm: FC = () => {
  return (
    <div>
      <Paper
        elevation={4}
        sx={{
          background: "#EEF1F4",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
          pt: 5,
          pb: 5,
          mb: 10,
        }}
      >
        <Typography
          sx={{ fontWeight: 600, fontSize: "30px", color: "#161616" }}
        >
          Поможем в выборе!
        </Typography>
        <Stack spacing={2}>
          <TextField
            sx={{
              background: "#fff",
              width: "650px",
              borderRadius: "5px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none", // Убирает рамку
                },
                "&:hover fieldset": {
                  border: "none", // Убирает рамку при наведении
                },
                "&.Mui-focused fieldset": {
                  border: "none", // Убирает рамку, если поле в фокусе
                },
              },
              "& .MuiOutlinedInput-input": {
                outline: "none", // Убирает outline
              },
            }}
            label="Имя"
          />
          <TextField
            sx={{
              background: "#fff",
              width: "650px",
              borderRadius: "5px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              "& .MuiOutlinedInput-input": {
                outline: "none",
              },
            }}
            label="Телефон"
          />
          <TextField
            sx={{
              background: "#fff",
              width: "650px",
              borderRadius: "5px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              "& .MuiOutlinedInput-input": {
                outline: "none",
              },
            }}
            label="Email"
          />
        </Stack>
        <Stack spacing={1}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontWeight: 600,
              background: "#E4002B",
              mb: 5,
              width: "300px",
              height: "50px",
            }}
          >
            Отправить
          </Button>
          <Typography
            sx={{ fontSize: "13px", textAlign: "center", color: "#161616" }}
          >
            Нажимая на кнопку, вы соглашаетесь <br /> на обработку персональных
            данных
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
};

export default ContactForm;
