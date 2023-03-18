import React from "react";
import { Grid, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export const MessageBoxWhite = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        width: "414px",
        height: "55px",
        bgcolor: "white",
        borderRadius: "10px 0px 10px 10px",
        padding: "10px",
        gap: "4px",
        boxShadow: "8px 4px 30px rgba(0, 0, 0, 0.1)",
        // transform: "matrix(1, 0, 0, -1, 0, 0)",
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#1E1E1E",
            // transform: "matrix(1, 0, 0, -1, -10, 30)",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
      </Grid>
      <Grid container justifyContent="end">
        <Typography
          sx={{
            fontSize: "8px",
            fontWeight: 600,
            color: "#282828",
          }}
        >
          12.51
        </Typography>
      </Grid>
    </Grid>
  );
};
