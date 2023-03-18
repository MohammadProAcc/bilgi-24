import styled from "@emotion/styled";

export function ShadowedImage(props) {
  return (
    <_ Style={props.Style}>
      <div className="overlay" />
      <Image Style={props.imageStyle} src={props.src} />
      {props.children}
    </_>
  );
}

const _ = styled.div`
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    border-radius: 0.625rem;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(
      222.8deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 34.87%
    );
  }

  ${(props) => props.Style}
`;

const Image = styled.img`
  ${(props) => props.Style}
`;
