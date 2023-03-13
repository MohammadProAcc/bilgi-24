import { Grid, Typography } from "@mui/material";

export function BoxTypography(props) {
  return (
    <Grid container direction="row" gap="4px" alignItems="center">
      <Typography sx={{ color: "#1E1E1E", fontSize: "10px", fontWeight: 400 }}>
        {props.text}
      </Typography>
      <Typography
        sx={{
          color: "#1E1E1E",
          fontSize: "10px",
          fontWeight: 500,
          opacity: 0.3,
        }}
      >
        ....................
      </Typography>
      <Typography sx={{ color: "#1E1E1E", fontSize: "10px", fontWeight: 400 }}>
        {props.number}
      </Typography>
    </Grid>
  );
}
