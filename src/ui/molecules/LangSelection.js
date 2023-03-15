import { Color } from "$/design";
import styled from "@emotion/styled";
import { FormControl, NativeSelect } from "@mui/material";
import { useState } from "react";

// FIXME: flag must be imgs
export function LangSelection() {
  const [age, setAge] = useState();

  return (
    <_>
      <FormControl sx={{ width: "5.625rem" }}>
        <NativeSelect
          defaultValue="ENG"
          inputProps={{
            name: "lang",
            id: "uncontrolled-native",
          }}
        >
          <option value="ENG">🇺🇸 ENG</option>
          <option value="TRK">🇹🇷 TRK</option>
        </NativeSelect>
      </FormControl>
    </_>
  );
}

const _ = styled.div`
  .MuiInputBase-root {
    color: ${Color.strokeLight};

    background-image: url("/images/chevron-down.svg");
    background-repeat: no-repeat;
    background-position: calc(100% - 0.25rem) center;

    &::before,
    &::after {
      display: none;
    }

    svg {
      display: none;
    }

    option {
      color: ${Color.stroke};
    }
  }
`;
