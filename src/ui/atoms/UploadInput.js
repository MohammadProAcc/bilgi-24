import { Color } from "$/design";
import styled from "@emotion/styled";

export function UploadInput(props) {
  return (
    <_>
      {props.label}
      <label>
        <img src={props.icon} />
        <span>{props.buttonLabel}</span>
        <input type="file" />
      </label>
    </_>
  );
}

const _ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6875rem;

  label {
    width: 10.75rem;
    height: 6.875rem;
    border-radius: 0.3125rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    background-color: ${Color.cardBackground};
    box-shadow: 4px 4px 45px 0px #0000001a;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.0625rem;
    letter-spacing: 0em;
    text-align: left;

    &:hover {
      cursor: pointer;
    }

    input {
        display: none;
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.0625rem;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
