import React from "react";
import { Grid, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export const MessageBoxBlue = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        width: "333px",
        height: "58px",
        bgcolor: "#0C4B5E",
        borderRadius: "10px 0px 10px 10px",
        padding: "10px",
        gap: "4px",
      }}
    >
      <Grid container xl>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "white",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
      </Grid>
      <Grid container direction="row" gap="6px" justifyContent="end" xl>
        <DoneAllIcon sx={{ width: "16px", height: "16px", color: "white" }} />
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: 300,
            color: "white",
          }}
        >
          12.51
        </Typography>
      </Grid>
    </Grid>
  );
};
