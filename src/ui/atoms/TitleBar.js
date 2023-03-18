import { Color } from "$/design";
import styled from "@emotion/styled";

export function TitleBar(props) {
  return (
    <_>
      <div className="title">{props.title}</div>
      <div className="hr" />
    </_>
  );
}

const _ = styled.div`
  width: 100%;
  height: 1.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .title {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: 0em;
    text-align: left;
  }

  .hr {
    width: 100%;
    height: 0;
    border: 1px solid ${Color.strokeDarkMellow};
  }
`;
