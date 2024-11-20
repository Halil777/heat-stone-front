import { Box, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Fetcher function для получения данных с API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Banner: FC = () => {
  // Используем SWR для получения данных
  const { data, error } = useSWR("http://localhost:3000/banner", fetcher);

  if (error) return <div>Ошибка загрузки баннеров...</div>;
  if (!data) return <div>Загрузка...</div>;

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
      {data.map((banner: any) => (
        <SwiperSlide key={banner.id}>
          <Box
            sx={{
              background: `url(${banner.image})`,
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
                {banner.title}
              </Typography>
              <Typography sx={{ fontSize: "16px", width: "40%" }}>
                {banner.subtitle}
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
      ))}
      {/* Кастомная пагинация */}
      <div className="custom-pagination"></div>
    </Swiper>
  );
};
export default Banner;
