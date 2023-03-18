import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Button, Grid, styled } from "@mui/material";

export const CustomTextfieldChat = () => {
  const CustomIconButton = styled(IconButton)({
    "&:hover": {
      backgroundColor: "inherit",
    },
  });
  return (
    <Grid
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: "2px solid rgba(30,30,30,0.3)",
        borderRadius: "5px",
      }}
    >
      <CustomIconButton sx={{ p: "10px" }} aria-label="microphone">
        <MicIcon sx={{ width: "26px", height: "26px", color: "#1E1E1E" }} />
      </CustomIconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Type Something..."
        inputProps={{ "aria-label": "input text" }}
      />
      <CustomIconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <AttachFileIcon
          sx={{ width: "26px", height: "26px", color: "#1E1E1E" }}
        />
        <Button
          variant="contained"
          color="sub"
          size="small"
          sx={{
            width: "85px",
            height: "32px",
            fontSize: "14px",
            fontWeight: 500,
            color: "#1E1E1E",
          }}
        >
          Send
        </Button>
      </CustomIconButton>
    </Grid>
  );
};
