import styled from "@emotion/styled";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export function CheckboxInput(props) {
  return (
    <_ Style={props.Style} rootStype={props.rootStyle}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
              color="sub"
            />
          }
          label={props.label}
        />
      </FormGroup>
    </_>
  );
}

const _ = styled.div`
  height: 1rem;

  display: flex;

  * {
    height: 1rem;
  }

  .MuiButtonBase-root {
    width: 2.25rem !important;
    ${(props) => props.rootStyle}
  }
  span {
    font-size: 0.75rem;
  }

  ${(props) => props.Style}
`;
