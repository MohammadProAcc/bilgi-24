import styled from "@emotion/styled";

export function SVGEllipse4(props) {
  return (
    <Svg
      width="271"
      height="919"
      viewBox="0 0 271 919"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      Style={props.Style}
    >
      <circle
        opacity="0.05"
        cx="579.5"
        cy="339.5"
        r="544"
        stroke="#011F28"
        stroke-width="71"
      />
    </Svg>
  );
}

const Svg = styled.svg`
  ${(props) => props.Style}
`;
