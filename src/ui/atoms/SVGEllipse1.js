import styled from "@emotion/styled";

export function SVGEllipse1(props) {
  return (
    <Svg
      width="511"
      height="937"
      viewBox="0 0 511 937"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      Style={props.Style}
    >
      <circle
        opacity="0.05"
        cx="468.5"
        cy="468.5"
        r="429.5"
        stroke="white"
        stroke-width="78"
      />
    </Svg>
  );
}

const Svg = styled.svg`
  ${(props) => props.Style}
`;
