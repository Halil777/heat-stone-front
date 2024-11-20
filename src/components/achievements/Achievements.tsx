import { Divider, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";

const Achievements: FC = () => {
  return (
    <>
      <Grid container mb={10} mt={5}>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Stack direction="row" spacing={2}>
            <Stack spacing={1}>
              <Typography
                sx={{
                  color: "#161616",
                  fontSize: "45px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                647+
              </Typography>
              <Typography
                sx={{
                  color: "#161616",
                  textAlign: "center",
                }}
              >
                Домов отапливаются нашими радиаторами по России
              </Typography>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
          </Stack>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Stack direction="row" spacing={2}>
            <Stack spacing={1}>
              <Typography
                sx={{
                  color: "#161616",
                  fontSize: "45px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                18
              </Typography>
              <Typography
                sx={{
                  color: "#161616",
                  textAlign: "center",
                }}
              >
                Регионов в которых представлена наша компания и продукция
              </Typography>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
          </Stack>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Stack direction="row" spacing={2}>
            <Stack spacing={1}>
              <Typography
                sx={{
                  color: "#161616",
                  fontSize: "45px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                820+
              </Typography>
              <Typography
                sx={{
                  color: "#161616",
                  textAlign: "center",
                }}
              >
                Квадратных метров, отапливаемых нашими радиаторами, ежемесячно
              </Typography>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
          </Stack>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Stack direction="row" spacing={2}>
            <Stack spacing={1}>
              <Typography
                sx={{
                  color: "#161616",
                  fontSize: "45px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                7
              </Typography>
              <Typography
                sx={{
                  color: "#161616",
                  textAlign: "center",
                }}
              >
                Лет успешной работы на рынке
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Achievements;
