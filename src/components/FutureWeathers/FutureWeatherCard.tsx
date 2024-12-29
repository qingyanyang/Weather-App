import {
  SizedBox,
  Column,
  TextRegular,
  TextSmall,
  IconBox,
  TextMedium,
} from "@/styles";
import { WeeklyWeatherDataType } from "@/types";
import { getWeatherIcon2XUrl } from "@/utils/getImageUrl";

export const FutureWeatherCard: React.FC<WeeklyWeatherDataType> = (props) => {
  const { tempRange, iconCode, date, day } = props;
  return (
    <Column>
      <TextRegular>{day}</TextRegular>
      <SizedBox $height={10} />
      <TextSmall>{date}</TextSmall>
      <SizedBox $height={20} />
      <IconBox
        $url={getWeatherIcon2XUrl(iconCode)}
        $width={110}
        $height={110}
      />
      <SizedBox $height={20} />
      <TextMedium> {tempRange}</TextMedium>
    </Column>
  );
};
