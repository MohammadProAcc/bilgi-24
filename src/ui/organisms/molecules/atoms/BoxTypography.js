import { SVGCarbonViewRightMargined } from "$/ui/atoms";
import { Box, Grid, Typography } from "@mui/material";

export function BoxTypography(props) {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        padding: "10px",
        alignItems: "center",
        ...props.sxMain,
      }}
      {...props.other}
      xl
    >
      <Typography
        position="absolute"
        bgcolor="white"
        left={0}
        sx={{
          fontSize: "10px",
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
          ...props.sxText,
        }}
      >
        {props.isPreview && <SVGCarbonViewRightMargined />}
        {props.text}
      </Typography>
      <Typography
        position="absolute"
        bgcolor="white"
        right={0}
        sx={{ fontSize: "10px", fontWeight: 500, ...props.sxNumber }}
      >
        {props.number}
      </Typography>
      <Box
        sx={{
          borderTop: "1px dotted rgba(30,30,30,0.3)",
          borderBottom: "1px dotted rgba(30,30,30,0.3)",
          width: "100%",
        }}
      ></Box>
    </Grid>
  );
}
