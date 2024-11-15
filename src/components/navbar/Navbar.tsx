import { Button, Stack } from "@mui/material";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button
            sx={{ textTransform: "none", color: "#161616" }}
            variant="text"
          >
            Каталог
          </Button>
          <Button
            sx={{ textTransform: "none", color: "#161616" }}
            variant="text"
          >
            О нас
          </Button>
          <Button
            sx={{ textTransform: "none", color: "#161616" }}
            variant="text"
          >
            Наши адреса
          </Button>
          <Button
            sx={{
              textTransform: "none",
              background: "#FBE739",
              color: "#161616",
            }}
            variant="contained"
          >
            Акции
          </Button>
        </Stack>
        <Button
          sx={{ background: "#161616", textTransform: "none" }}
          variant="contained"
        >
          Заказать звонок
        </Button>
      </Stack>
    </>
  );
};

export default Navbar;
