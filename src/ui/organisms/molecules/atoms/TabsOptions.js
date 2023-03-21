import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

export function TabsOptions(props) {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "md"));
  let disable = props.disable;
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      padding={`${!responsive ? "0 50px" : "0 35px"}`}
      marginBottom={`${!responsive ? "20px" : "7px"}`}
    >
      {disable === "true" ? (
        <Typography
          sx={{
            fontSize: `${!responsive ? "14px" : "7px"}`,
            fontWeight: 500,
            color: "#1E1E1E",
            opacity: 0.6,
          }}
        >
          {props.text}
        </Typography>
      ) : (
        <Typography
          sx={{
            fontSize: `${!responsive ? "14px" : "7px"}`,
            fontWeight: 500,
            color: "#1E1E1E",
          }}
        >
          {props.text}
        </Typography>
      )}
      {disable === "true" ? (
        <Box
          sx={{
            width: `${!responsive ? "16px" : "8px"}`,
            height: `${!responsive ? "16px" : "8px"}`,
            borderRadius: "2px",
            backgroundColor: "#F5B61A",
            opacity: 0.3,
          }}
        />
      ) : (
        <Box
          sx={{
            width: `${!responsive ? "16px" : "8px"}`,
            height: `${!responsive ? "16px" : "8px"}`,
            borderRadius: "2px",
            backgroundColor: "#F5B61A",
          }}
        />
      )}
    </Grid>
  );
}
