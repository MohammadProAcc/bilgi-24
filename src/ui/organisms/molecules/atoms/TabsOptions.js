import { Box, Grid, Typography } from "@mui/material";

export function TabsOptions(props) {
  let disable = props.disable;
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      padding="0 50px"
      marginBottom="20px"
    >
      {disable === "true" ? (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#1E1E1E",
            opacity: 0.6,
          }}
        >
          {props.text}
        </Typography>
      ) : (
        <Typography
          sx={{ fontSize: "14px", fontWeight: 500, color: "#1E1E1E" }}
        >
          {props.text}
        </Typography>
      )}
      {disable === "true" ? (
        <Box
          sx={{
            width: "16px",
            height: "16px",
            borderRadius: "2px",
            backgroundColor: "#F5B61A",
            opacity: 0.3,
          }}
        />
      ) : (
        <Box
          sx={{
            width: "16px",
            height: "16px",
            borderRadius: "2px",
            backgroundColor: "#F5B61A",
          }}
        />
      )}
    </Grid>
  );
}
