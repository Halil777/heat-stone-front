import { FC } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: FC = () => {
  return (
    <div>
      <Box
        mt={15}
        mb={15}
        sx={{ display: "flex", flexDirection: "column", gap: 7 }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography>8 800 600 50 13</Typography>
            <Typography>для звонков по всей России</Typography>
          </Stack>
          <Typography sx={{ fontWeight: 600 }}>Каталог</Typography>
          <Typography sx={{ fontWeight: 600 }}>О нас</Typography>
          <Typography sx={{ fontWeight: 600 }}>Наши адреса</Typography>
          <Typography sx={{ fontWeight: 600 }}>Акции</Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              background: "#161616",
              borderRadius: "5px",
            }}
          >
            приглашаем к сотруднечеству
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ color: "#A0A0A0", fontSize: "13px" }}>
            Рабочие дни: Пн-Сб <br /> Рабочее время: 9:00 - 18:00 <br />
            heat.stone.ru@yandex.ru
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={{ background: "#eeeeee", p: 1, borderRadius: "5.5px" }}>
              <YouTubeIcon sx={{ fontSize: "24px" }} />
            </Box>
            <Box sx={{ background: "#eeeeee", p: 1, borderRadius: "5.5px" }}>
              <InstagramIcon sx={{ fontSize: "24px" }} />
            </Box>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ fontSize: "12px" }}>ООО «Эко Тепло»</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            Адрес: 420124, г. Казань, ул. Комиссара Габишева, 2
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationThickness: "2px",
            }}
          >
            Политика конфиденциальности
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
