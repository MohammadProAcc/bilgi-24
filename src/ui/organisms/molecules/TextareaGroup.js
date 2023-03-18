import { Color } from "$/design";
import styled from "@emotion/styled";
import { TextareaAutosize } from "@mui/material";

export function TextareaGroup(props) {
  return (
    <_ label={props.label} icon={props.icon} Style={props.Style}>
      <label htmlFor={props.label}>{props.label}</label>
      <TextareaAutosize
        id={props.label}
        className="form-group-input"
        style={{
          width: "100%",
        }}
        sx={{
          height: "2.5rem",
        }}
        {...props.inputProps}
      />
    </_>
  );
}

const _ = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6875rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: ${Color.strokeDark};
  }

  textarea {
    max-width: 37.8125rem;
    min-height: 11.9375rem;
    padding: 0.6875rem 1.125rem;
  }

  ${(props) => props.Style}
`;
