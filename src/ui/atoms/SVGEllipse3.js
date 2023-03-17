import styled from "@emotion/styled";

export function SVGEllipse3(props) {
  return (
    <Svg
      width="229"
      height="710"
      viewBox="0 0 229 710"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      Style={props.Style}
    >
      <circle
        opacity="0.05"
        cx="-157.5"
        cy="386.5"
        r="351"
        stroke="#011F28"
        stroke-width="71"
      />
    </Svg>
  );
}

const Svg = styled.svg`
  ${(props) => props.Style}
`;
