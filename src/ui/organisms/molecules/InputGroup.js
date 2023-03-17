import { Color } from "$/design";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export function InputGroup(props) {
  return (
    <_ label={props.label} icon={props.icon}>
      <label htmlFor={props.label}>{props.label}</label>
      <TextField
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
  gap: 0.6875rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: ${Color.strokeDark};
  }

  .MuiInputBase-root {
    height: 2.5rem;
  }

  .form-group-input {
    input {
      padding: 0;
      padding-right: 2.5rem;
      padding-left: 0.875rem;

      background-image: url("${(props) => props.icon}");
      background-repeat: no-repeat;
      background-position: calc(100% - 0.9375rem) center;
    }
  }
`;
