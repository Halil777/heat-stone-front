import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FC } from "react";
import { colWidth3 } from "../../utils/colWidth";

const Advantages: FC = () => {
  return (
    <div>
      <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
        Преимущество нашего отопления
      </Typography>
      <Grid container mt={5} spacing={10}>
        <Grid size={colWidth3}>
          <Stack spacing={2}>
            <img
              src="/images/advantage1.png"
              style={{ width: "60px" }}
              alt="advantage"
            />
            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
              Отличные показатели теплоемкости
            </Typography>
            <Typography>
              Подобно камню на печи в сауне, радиатор накапливает в себе тепло и
              мягко согревает помещение. Он долго отдает тепло, потому время
              активной работы (нагревания) составляет всего 7–8 часов в день.
              Конструкция радиаторов подразумевает отличную конвекцию –
              воздушные потоки нагреваются и распространяются по всему
              помещению.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={colWidth3}>
          <Stack spacing={2}>
            <img
              src="/images/advantage2.png"
              style={{ width: "60px" }}
              alt="advantage"
            />
            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
              Пожаробезопасность – один из ключевых моментов
            </Typography>
            <Typography>
              Нагревательный элемент расположен внутри камня, он не контактирует
              с окружающей средой, на нем не подгорает оседающая пыль.
              Температура нагревательного элемента не превышает 100 оС, а сам
              камень может иметь температуру не выше 90 оС.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={colWidth3}>
          <Stack spacing={2}>
            <img
              src="/images/advantage3.png"
              style={{ width: "60px" }}
              alt="advantage"
            />
            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
              Автономность – плюс для потребителя
            </Typography>
            <Typography>
              При установке системы в каждом помещении можно поддерживать
              определенную температуру. Это экономно и выгодно с точки зрения
              оплаты счетов. Снижение температуры всего на 2 оС дает почти 10
              процентов экономии за месяц. В неиспользуемых комнатах температуру
              можно снизить до 6–8 оС и поднимать ее лишь тогда, когда
              планируется пребывание людей в них.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={colWidth3}>
          <Stack spacing={2}>
            <img
              src="/images/advantage4.png"
              style={{ width: "60px" }}
              alt="advantage"
            />
            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
              Надежность и долговечность системы
            </Typography>
            <Typography>
              Производитель гарантирует до 20 лет беспроблемной работы
              радиаторов при соблюдении элементарных правил эксплуатации и
              ухода. При выходе из строя одного из радиаторов не придется
              останавливать работу всей системы. Конструкция максимально простая
              и надежная.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={colWidth3}>
          <Stack spacing={2}>
            <img
              src="/images/advantage5.svg"
              style={{ width: "60px" }}
              alt="advantage"
            />
            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
              Простой монтаж и подключение системы
            </Typography>
            <Typography>
              Для установки радиаторов не нужно приглашать специалистов, с этим
              вполне справится любой электрик или хозяин дома, имеющий
              элементарные навыки работы с дрелью и другими инструментами.
              Потребуется навесить радиаторы на дюбеля, соединить их с
              терморегуляторами и включить в сеть – система отопления готова к
              работе.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={colWidth3}>
          <Stack spacing={2}>
            <img
              src="/images/advantage6.png"
              style={{ width: "60px" }}
              alt="advantage"
            />
            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
              Низкая стартовая стоимость всей системы
            </Typography>
            <Typography>
              Затраты на покупку каменных радиаторов и их монтаж будут в 3-4
              раза дешевле любого водяного отопления, будь то газовый или
              электрический котел. Для работы системы отопления из каменных
              радиаторов не нужны дополнительные условия и отдельное помещение.
              Поломки случаются крайне редко, что также снижает расходную часть
              в процессе эксплуатации.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Advantages;
