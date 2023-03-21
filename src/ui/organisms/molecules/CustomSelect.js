import React, { useState } from "react";
import { Box, FormControl, MenuItem, Select, styled } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export function CustomSelect(props) {
  const [age, setAge] = useState("");

  function handleChange(event) {
    setAge(event.target.value);
  }
  const DropDown = styled(Select)(({ theme }) => ({
    height: "30px",
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#F5B61A",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F5B61A",
    },
    ...props.sxSelect,
    [theme.breakpoints.between("xs", "md")]: {
      width: "60px",
      height: "17px",
      "& .MuiSvgIcon-root": {
        width: "12px",
        height: "24px",
      },
      "& .MuiInputBase-input": {
        fontSize: "10px",
      },
      "& .MuiOutlinedInput-input ": {
        padding: "3px",
      },
      "& .MuiInputBase-input.MuiOutlinedInput-input": {
        paddingRight: "0",
      },
    },
  }));
  const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "10px",
      minHeight: "34px",
      paddingLeft: "13px",
      paddingLight: "6px",
    },
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between("xs", "md")]: {
      height: "15px",
      alignItems: "end",
    },
  }));
  return (
    <CustomBox>
      <FormControl>
        <DropDown
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          defaultValue={"0"}
          variant="outlined"
          color="info"
          IconComponent={props.icon}
        >
          {props.name.map((item, index) => (
            <CustomMenuItem key={index} value={index}>
              {item}
            </CustomMenuItem>
          ))}
        </DropDown>
      </FormControl>
    </CustomBox>
  );
}
