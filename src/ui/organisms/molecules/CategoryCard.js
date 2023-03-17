import { Zindex } from "$/design";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export function CategoryCard(props) {
  return (
    <Grid
      container
      direction="column"
      sx={{
        width: "120px",
        height: "146px",
        boxShadow: " 5px 5px 46px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#0A4556",
        borderRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        zIndex: Zindex.categoryCard,
        "&:hover": {
          boxShadow: " 5px 5px 46px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        },
      }}
    >
      <Image width={64} height={70} alt="vector-box" src={props.imageSrc} />
      <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "white" }}>
        {props.text}
      </Typography>
    </Grid>
  );
}
