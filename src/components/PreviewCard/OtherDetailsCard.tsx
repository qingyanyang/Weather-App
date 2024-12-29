import { Card, TextSmall, Column, Row } from "@/styles";
import { ReactNode } from "react";
import {
  HumiditySVG,
  PM25,
  SomatosensoryTemperature,
  WindSpeed,
} from "./MetaISVGs";
import { MetaDetailType } from "@/types";
export const OtherDetailsCard: React.FC<MetaDetailType> = ({
  humidity,
  pm25,
  somatosensoryTemp,
  windSpeed,
}) => {
  return (
    <Card $borderRadius={10} $padding={15}>
      <Row $gap={20} $justifyContent="space-between">
        <DetailWidget data={humidity}>
          <HumiditySVG />
        </DetailWidget>
        <DetailWidget data={windSpeed}>
          <WindSpeed />
        </DetailWidget>
        <DetailWidget data={pm25}>
          <PM25 />
        </DetailWidget>
        <DetailWidget data={somatosensoryTemp}>
          <SomatosensoryTemperature />
        </DetailWidget>
      </Row>
    </Card>
  );
};

type DetailWidgetProps = {
  data: string;
  children: ReactNode;
};

const DetailWidget: React.FC<DetailWidgetProps> = ({ data, children }) => {
  return (
    <Column $gap={10}>
      {children}
      <TextSmall>{data}</TextSmall>
    </Column>
  );
};
