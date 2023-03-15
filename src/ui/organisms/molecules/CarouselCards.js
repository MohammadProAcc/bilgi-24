import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BoxTypography } from "$/ui/organisms/molecules/atoms";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export function CarouselCards() {
  const CustomLink = styled(Link)({
    fontSize: "10px",
    fontWeight: 500,
  });
  const breadcrumbs = [
    <CustomLink
      underline="none"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Turkey
    </CustomLink>,
    <CustomLink
      underline="none"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Istanbul
    </CustomLink>,
  ];
  return (
    <Grid
      container
      direction="row"
      sx={{
        width: "296px",
        height: "138px",
        boxShadow: "6px 7px 28px rgba(0, 0, 0, 0.1)",
        alignItems: "center",
        gap: "18px",
        padding: "12px",
      }}
    >
      <Box xl>
        <Image
          width={114}
          height={114}
          alt="box-image"
          src="/images/box-pic1.png"
          style={{ borderRadius: "5px" }}
        />
      </Box>
      <Grid container direction="column" gap="4px" xl>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 500, color: "#1E1E1E" }}
        >
          Apartment
        </Typography>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="10ox" />}>
          {breadcrumbs}
        </Breadcrumbs>
        <Grid container direction="column" gap="2px">
          <BoxTypography text="M2 (groos)" number="105" />
          <BoxTypography text="M2 (net)" number="95" />
        </Grid>
        <Grid container direction="row" alignItems="center" justifyContent="space-between">
          <Typography sx={{color:"#1E1E1E",fontSize:"10px",fontWeight:500}}>3 Rooms</Typography>
          <Typography sx={{color:"#1E1E1E",fontSize:"12px",fontWeight:500}}>35,000$</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
