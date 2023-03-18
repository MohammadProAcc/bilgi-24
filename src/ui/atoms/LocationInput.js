import styled from "@emotion/styled";

export function LocationInput() {
  return (
    <_>
      <div className="title">Select Location</div>

      <img src="/images/Map.png" />
    </_>
  );
}

const _ = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;

  .title {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.0625rem;
    letter-spacing: 0em;
    text-align: center;
  }

  img {
    width: 100%;
    height: 18rem;
    object-fit: cover;
    box-shadow: 4px 4px 63px 0px #00000026;
  }
`;
