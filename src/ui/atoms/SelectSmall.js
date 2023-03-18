import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";
import { useNonInitialEffect } from "$/hooks";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function SelectSmall(props) {
  const theme = useTheme();
  const [selected, setSelected] = React.useState(props.items[0]);

  useNonInitialEffect(() => {
    props.callback?.(selected);
  }, [selected]);

  return (
    <_>
      <FormControl sx={{ width: "100%" }}>
        <Select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          renderValue={() => selected}
          // FIXME: remove border
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          color="sub"
        >
          {props.items.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </_>
  );
}

const _ = styled.div`
  .MuiFormControl-root {
    box-shadow: 4px 4px 45px 0px #0000001a;

    svg {
      display: none;
    }
    .MuiSelect-select {
      background-image: url("/images/select-chevron-down.svg");
      background-repeat: no-repeat;
      background-position: calc(100% - 1rem) center;
    }
  }
`;
