import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { BoxTypography, CustomButton } from "./atoms";

export function CategoryGridView() {
  return (
    <Grid
      id="main"
      container
      direction="column"
      sx={{
        width: "296px",
        height: "307px",
        borderRadius: "10px",
        boxShadow: "6px 7px 28px rgba(0, 0, 0, 0.1)",
        padding: "13px 15px",
        cursor: "pointer",
        gap: "6px",
      }}
    >
      <Image
        width={266}
        height={172}
        alt="photo"
        src="/images/grid-view-pic.png"
        style={{ borderRadius: "5px" }}
      />
      <Grid container direction="column" gap="3px">
        <Grid container direction="row" alignItems="center" gap="2px">
          <Typography
            sx={{ fontSize: "14px", fontWeight: 500, color: "#1E1E1E" }}
          >
            Apartment Best Location
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 500,
              color: "#1E1E1E",
              marginRight: "14px",
            }}
          >
            (3 Rooms)
          </Typography>
        </Grid>
        <Grid container direction="row" gap="6px">
          <CustomButton>Elevator</CustomButton>
          <CustomButton>Labi</CustomButton>
          <CustomButton>Parking</CustomButton>
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          <BoxTypography
            text="M2 (groos)"
            sxMain={{ margin: "5px" }}
            number="105"
          />
          <BoxTypography
            text="M2 (net)"
            sxMain={{ margin: "5px" }}
            number="95"
          />
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            sx={{ color: "#1E1E1E", fontSize: "10px", fontWeight: 500 }}
          >
            Turkey, Istanbul
          </Typography>
          <Typography
            sx={{ color: "#1E1E1E", fontSize: "14px", fontWeight: 500 }}
          >
            35,000$
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
