import { Row, Card } from "@/styles";
import styled from "styled-components";

export const CityListWrapper = styled(Row)`
  background-color: red;
`;

export const CityCardWrapper = styled(Card)`
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 15px;
    }
  }
  &:active {
    &::before {
      opacity: 0;
    }
  }
`;
