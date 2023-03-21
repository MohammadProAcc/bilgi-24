import { BreakPoint, Color } from "$/design";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

export function SearchInput() {
  return (
    <_>
      <TextField
        placeholder="Enter Key Word"
        sx={{
          height: "3rem",
          color: Color.strokeLight,
        }}
      />
    </_>
  );
}

const _ = styled(Box)`
  width: 32.875rem;
  height: 3rem;

  .MuiFormControl-root {
    width: 100%;
    height: 3rem;
  }

  .MuiInputBase-root {
    height: 3rem;
    padding-right: 2rem;

    background-image: url("/images/search.svg");
    background-repeat: no-repeat;
    background-position: calc(100% - 0.9375rem) center;

    fieldset {
      border-color: rgba(255, 255, 255, 0.2) !important;
    }

    input {
      color: ${Color.strokeLight};

      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  @media ${BreakPoint.device.max.md} {
    width: 100%;
  }

  @media ${BreakPoint.device.min.md} and (max-width: 85rem) {
    width: 15rem;
  }
`;
