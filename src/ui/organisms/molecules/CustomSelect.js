import { Box, FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

export function CustomSelect() {
  const [age, setAge] = useState("");

  function handleChange(event) {
    setAge(event.target.value);
  }
  return (
    <Box>
      <FormControl>
        <Select
          sx={{ height: "30px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          defaultValue={"1"}
        >
          <MenuItem value={1}>Relevance</MenuItem>
          <MenuItem value={2}>Data</MenuItem>
          <MenuItem value={3}>Price Low to High</MenuItem>
          <MenuItem value={4}>Price High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
