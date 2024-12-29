import styled from "styled-components";

// Texts
export const Text = styled.p<{ $color?: "dark" | "light" }>`
  color: ${(props) => (props.$color === "light" ? "#fff" : "#000")};
`;
export const TextSmall = styled(Text)`
  font-size: 0.8rem;
`;
export const TextMedium = styled(Text)`
  font-size: 1rem;
`;

export const TextRegular = styled(Text)`
  font-weight: 700;
  font-size: 1.2rem;
`;
export const TextSimiBold = styled(Text)`
  font-weight: 700;
  font-size: 1.5rem;
`;
export const TextBold = styled(Text)`
  font-weight: 700;
  font-size: 5rem;
  background-image: linear-gradient(#fff, #fff, #9bb6f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

// Commonly used components
export const IconBox = styled.div<{
  $url: string;
  $width: number;
  $height: number;
}>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background: url(${(props) => props.$url}) no-repeat center;
  background-size: contain;
`;

export const Card = styled.div<{
  $borderRadius?: number;
  $padding?: number;
  $bg?: string;
  $width?: string;
  $url?: string;
}>`
  background-size: cover;
  background-image: ${(props) => props.$bg}, url(${(props) => props.$url});
  width: ${(props) => (props.$width ? props.$width : "100%")};
  background-color: #fff;
  padding: ${(props) => (props.$padding ? props.$padding : 0)}px;
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius : 0}px;
`;

export const Expanded = styled.div`
  flex: 1;
`;

export const Padding = styled.div<{
  $horizontal?: number;
  $vertical?: number;
  $top?: number;
  $bottom?: number;
  $right?: number;
  $left?: number;
}>`
  width: 100%;
  height: 100%;
  padding-top: ${(props) => (props.$vertical ? props.$vertical : props.$top)}px;
  padding-bottom: ${(props) =>
    props.$vertical ? props.$vertical : props.$bottom}px;
  padding-right: ${(props) =>
    props.$horizontal ? props.$horizontal : props.$right}px;
  padding-left: ${(props) =>
    props.$horizontal ? props.$horizontal : props.$left}px;
`;

export const SizedBox = styled.div<{
  $height?: number;
  $width?: number;
}>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

export const Row = styled.div<{
  $gap?: number;
  $justifyContent?: string;
}>`
  display: flex;
  gap: ${(props) => props.$gap}px;
  align-items: center;
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "center"};
`;

export const Column = styled.div<{
  $gap?: number;
  $justifyContent?: string;
  $alignItems?: string;
  $height?: string;
}>`
  height: ${(props) => (props.$height ? props.$height : "auto")};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap}px;
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : "center")};
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "center"};
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Float = styled(Center)`
  position: absolute;
`;
