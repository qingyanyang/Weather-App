import { Card } from "@/styles";
import styled from "styled-components";

export const PreviewCardWrapper = styled(Card)<{
  $url?: string;
  $bgColorLight: string;
  $bgColorDark: string;
}>`
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${(props) => props.$url}),
    radial-gradient(
      farthest-side at top left,
      ${(props) => props.$bgColorLight},
      transparent
    );
  background-color: ${(props) => props.$bgColorDark};
  background-size: cover;
`;

export const DetailWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
