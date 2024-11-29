import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FC } from "react";
import { colWidth2 } from "../../utils/colWidth";

const EstimatedCostCalculation: FC = () => {
  return (
    <Box mt={15} mb={15}>
      <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
        Ориентировочный расчет стоимости отопления от Heat Stone
      </Typography>
      <Paper elevation={5} sx={{ width: "100%", p: 5, mt: 3 }}>
        <Grid container spacing={5}>
          <Grid size={colWidth2}>
            <img src="/images/37.jpg" style={{ width: "100%" }} alt="" />
          </Grid>
          <Grid size={colWidth2}>
            <Stack spacing={0.3}>
              <Box
                sx={{
                  background: "#EEF1F4",
                  height: "65px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={"100%"}
                >
                  <Typography>Площадь отопления</Typography>
                  <Typography>72 м²</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  background: "#EEF1F4",
                  height: "65px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={"100%"}
                >
                  <Typography>Стоимость оборудования</Typography>
                  <Typography>62000 ₽</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  background: "#EEF1F4",
                  height: "65px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={"100%"}
                >
                  <Typography>6 шт. терморегуляторов по 1200 ₽</Typography>
                  <Typography>0 ₽ 7200 ₽</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  background: "#EEF1F4",
                  height: "65px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={"100%"}
                >
                  <Typography>Среднее потребление зимой</Typography>
                  <Typography>700 кВт/месяц</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  background: "#EEF1F4",
                  height: "65px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={"100%"}
                >
                  <Typography>Ежемесячная плата (1 кВт - 2,85 ₽)</Typography>
                  <Typography>1995 ₽/месяц</Typography>
                </Stack>
              </Box>
            </Stack>
            <Typography sx={{ fontSize: "30px", fontWeight: 600 }} my={3}>
              Итог: 62 000 ₽
            </Typography>
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
              СДЕЛАТЬ РАСЧЕТ
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default EstimatedCostCalculation;
