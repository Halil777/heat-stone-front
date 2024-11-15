import { Box, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Banner: FC = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true, el: ".custom-pagination" }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      style={{ width: "100%", height: "70vh" }}
      speed={2000}
    >
      {/* Первый слайд */}
      <SwiperSlide>
        <Box
          sx={{
            background: "url('/images/banner.png')",
            width: "100%",
            height: "70vh",
            backgroundPosition: "cover",
            backgroundSize: "100% 100%",
          }}
        >
          <Stack spacing={3} p={5}>
            <Typography
              sx={{
                fontSize: { md: "42px", lg: "42px", sm: "38px", xs: "30px" },
                fontWeight: 700,
                width: "50%",
              }}
            >
              Экономьте до 34% электроэнергии на отоплении
            </Typography>
            <Typography sx={{ fontSize: "16px", width: "40%" }}>
              Соберите отопление из теплоемких каменных радиаторов со сроком
              службы свыше 20 лет
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#FF462A",
                width: "240px",
                color: "#fff",
                height: "60px",
                fontWeight: "700",
              }}
            >
              Собрать отопление
            </Button>
          </Stack>
        </Box>
      </SwiperSlide>

      {/* Второй слайд */}
      <SwiperSlide>
        <Box
          sx={{
            background: "url('/images/banner.png')",
            width: "100%",
            height: "70vh",
            backgroundPosition: "cover",
            backgroundSize: "100% 100%",
          }}
        >
          <Stack spacing={3} p={5}>
            <Typography
              sx={{
                fontSize: { md: "42px", lg: "42px", sm: "38px", xs: "30px" },
                fontWeight: 700,
                width: "50%",
              }}
            >
              Другой заголовок для второго баннера
            </Typography>
            <Typography sx={{ fontSize: "16px", width: "40%" }}>
              Описание для второго слайда
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#FF462A",
                width: "240px",
                color: "#fff",
                height: "60px",
                fontWeight: "700",
              }}
            >
              Узнать больше
            </Button>
          </Stack>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            background: "url('/images/banner.png')",
            width: "100%",
            height: "70vh",
            backgroundPosition: "cover",
            backgroundSize: "100% 100%",
          }}
        >
          <Stack spacing={3} p={5}>
            <Typography
              sx={{
                fontSize: { md: "42px", lg: "42px", sm: "38px", xs: "30px" },
                fontWeight: 700,
                width: "50%",
              }}
            >
              Другой заголовок для второго баннера
            </Typography>
            <Typography sx={{ fontSize: "16px", width: "40%" }}>
              Описание для второго слайда
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#FF462A",
                width: "240px",
                color: "#fff",
                height: "60px",
                fontWeight: "700",
              }}
            >
              Узнать больше
            </Button>
          </Stack>
        </Box>
      </SwiperSlide>
      {/* Кастомная пагинация */}
      <div className="custom-pagination"></div>
    </Swiper>
  );
};

export default Banner;
