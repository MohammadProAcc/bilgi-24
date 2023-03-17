import styled from "@emotion/styled";

export function SVGEllipse2(props) {
  return (
    <Svg
      width="360"
      height="332"
      viewBox="0 0 360 332"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      Style={props.Style}
    >
      <circle
        opacity="0.05"
        cx="22.5"
        cy="-5.5"
        r="304"
        stroke="white"
        stroke-width="67"
      />
    </Svg>
  );
}

const Svg = styled.svg`
  ${(props) => props.Style}
`;
