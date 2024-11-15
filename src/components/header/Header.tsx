import { FC } from "react";
import { Stack, Typography } from "@mui/material";

const Header: FC = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "90px" }}
      >
        <img src="/images/logo.png" alt="logo" />
        <Stack direction="row" alignItems="center" spacing={4}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography>8 800 600-50-13</Typography>
            <Typography color="gray">Бесплатный звонок по России</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography>Рабочие дни: Пн-Сб</Typography>
            <Typography>Время: 9:00 - 18:00</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
