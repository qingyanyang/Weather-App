import {
  TextSmall,
  Column,
  TextSimiBold,
  TextBold,
  IconBox,
  TextMedium,
  SizedBox,
} from "@/styles";
import { OtherDetailsCard } from "./OtherDetailsCard";
import { DetailWrapper, PreviewCardWrapper } from "./style";
import { getWeatherBGUrl, getWeatherIcon2XUrl } from "@/utils/getImageUrl";
import { TodayWeatherDataType } from "@/types";
import { getPreviewBgColorString } from "@/utils/getMappingdata";

export const PreviewCard: React.FC<TodayWeatherDataType> = (props) => {
  const { cityName, tempRange, iconCode, date, day, time, metaDetails } = props;
  const currentTemp = tempRange.split("~")[1].trim();

  return (
    <PreviewCardWrapper
      $padding={16}
      $borderRadius={28}
      $url={getWeatherBGUrl(iconCode)}
      $bgColorLight={getPreviewBgColorString(iconCode).colorLight}
      $bgColorDark={getPreviewBgColorString(iconCode).colorDark}
    >
      <TextSmall $color={"light"}>
        {date},&nbsp;{day}&nbsp;{time}
      </TextSmall>
      <SizedBox $height={20} />
      <DetailWrapper>
        <TextSimiBold $color="light">{cityName}</TextSimiBold>
        <Column>
          <TextBold $color="light">{currentTemp}</TextBold>
          <TextMedium $color="light">{tempRange}</TextMedium>
        </Column>
        <IconBox
          $url={getWeatherIcon2XUrl(iconCode)}
          $width={140}
          $height={140}
        />
        {metaDetails && <OtherDetailsCard {...metaDetails} />}
      </DetailWrapper>
    </PreviewCardWrapper>
  );
};
