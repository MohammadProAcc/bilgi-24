import { Color } from "$/design";
import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import { useState } from "react";

export function LangSelection() {
  const [age, setAge] = useState();

  return (
    <_>
      <select
        defaultValue={30}
        inputProps={{
          name: "age",
          id: "uncontrolled-native",
        }}
      >
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </select>
    </_>
  );
}

const _ = styled(Box)`
  display: flex;
  align-items: center;

  #uncontrolled-native {
    color: ${Color.strokeLight};

    option {
      color: ${Color.stroke};
    }
  }
`;
