import React, { useState } from "react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export function CustomSelect(props) {
  const [age, setAge] = useState("");

  function handleChange(event) {
    setAge(event.target.value);
  }
  return (
    <Box>
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          defaultValue={"0"}
          variant="outlined"
          color="info"
          IconComponent={props.icon}
          sx={{
            height: "30px",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#F5B61A",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F5B61A",
            },
            ...props.sxSelect,
          }}
        >
          {props.name.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item}
            </MenuItem>
          ))}
          {/* <MenuItem value={1}>Newest</MenuItem>
          <MenuItem value={2}>Data</MenuItem>
          <MenuItem value={3}>Price Low to High</MenuItem>
          <MenuItem value={4}>Price High to Low</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
