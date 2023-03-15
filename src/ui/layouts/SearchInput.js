import { Color } from "$/design";
import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

export function SearchInput() {
  return (
    <CustomTextField
      id="outlined-basic"
      label="Enter Key Word"
      variant="outlined"
      color="secondary"
      sx={{
        color: Color.strokeLight,
      }}
    />
  );
}

const CustomTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow",
      },
    },
  },
})(TextField);
