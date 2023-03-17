import { SelectSmall } from "$/ui";
import styled from "@emotion/styled";

export function SelectInputGroup(props) {
  return (
    <_ label={props.label} icon={props.icon} style={props.style}>
      <label htmlFor={props.label}>{props.label}</label>
      <SelectSmall
        label={props.label}
        items={props.items}
        callback={props.callback}
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
    font-weight: 700;
    line-height: 1.0625rem;
    letter-spacing: 0em;
    text-align: left;
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
