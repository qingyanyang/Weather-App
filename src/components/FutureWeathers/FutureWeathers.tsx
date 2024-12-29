import { Row, Padding } from "@/styles";
import { FutureWeatherCard } from "./FutureWeatherCard";
import { WeeklyWeatherDataType } from "@/types";

export const FutureWeathers: React.FC<WeeklyWeatherDataType[]> = (props) => {
  return (
    <Padding $vertical={30} $horizontal={30}>
      <Row $gap={40} $justifyContent="space-between">
        <FutureWeatherCard {...props[0]} />
        <FutureWeatherCard {...props[1]} />
        <FutureWeatherCard {...props[2]} />
        <FutureWeatherCard {...props[3]} />
      </Row>
    </Padding>
  );
};
