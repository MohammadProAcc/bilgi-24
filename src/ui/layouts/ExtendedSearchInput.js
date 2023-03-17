import { Color } from "$/design";
import { SVGFilter, SVGSearchDark } from "$/ui";
import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";

export function ExtendedSearchInput() {
  return (
    <_>
      <TextField
        placeholder="Enter Key Word"
        sx={{
          width: "100%",
          height: "2.75rem",
          color: Color.strokeLight,
        }}
      />
      <Button
        sx={{
          height: "calc(100% - 0.625rem)",
          position: "absolute",
          top: "0.3125rem",
          right: "0.3125rem",
          color: Color.stroke,
          display: "flex",
          gap: "0.375rem",
        }}
        color="plain"
        variant="contained"
      >
        <SVGSearchDark />
        Search
      </Button>
      <Button
        style={{
          maxWidth: "2rem",
          minWidth: "2rem",
          height: "calc(100% - 0.625rem)",
          padding: "0",
          position: "absolute",
          top: "0.3125rem",
          right: "6.75rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <SVGFilter />
      </Button>
    </_>
  );
}

const _ = styled(Box)`
  width: 100%;
  position: relative;

  .MuiFormControl-root {
    height: 2.75rem;
  }

  .MuiInputBase-root {
    height: 2.75rem;
    padding-right: 8.25rem;

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
`;
