import Image from "next/image";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  styled,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BoxTypography, CustomButton } from "./atoms";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
// FIXME:
export function CategoryListViewCard(props) {
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
      id="main"
      container
      direction="row"
      sx={{
        width: "890px",
        height: "174px",
        boxShadow: "6px 7px 28px rgba(0, 0, 0, 0.07)",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <Grid
        id="content"
        container
        direction="column"
        padding="27px"
        xl={8}
        gap="20px"
      >
        <Grid container direction="row" gap="20px">
          <Grid container direction="column" sx={{width:"fit-content"}} xl>
            <Grid container direction="row" alignItems="center" gap="4px">
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
              <Typography
                sx={{ fontSize: "12px", fontWeight: 500, color: "#1E1E1E" }}
              >
                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35,000$
              </Typography>
            </Grid>
            <Grid container direction="row" gap="12px" alignItems="center">
              <Box xl>
                <Breadcrumbs
                  sx={{
                    "& .MuiBreadcrumbs-separator": {
                      marginLeft: "0",
                      marginRight: "0",
                    },
                  }}
                  separator={<NavigateNextIcon fontSize="10px" />}
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Box>
              <Grid container direction="row" gap="6px" xl>
                <CustomButton>Elevator</CustomButton>
                <CustomButton>Labi</CustomButton>
                <CustomButton>Parking</CustomButton>
              </Grid>
            </Grid>
          </Grid>
          <Box width="28%">
            <BoxTypography text="M2 (groos)" number="105" />
            <BoxTypography text="M2 (net)" number="95" />
          </Box>
        </Grid>
        <Typography
          sx={{
            fontSize: "11px",
            fontWeight: 300,
            lineHeight: "203%",
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque.
        </Typography>
      </Grid>
      <Grid
        id="images"
        container
        padding="14px"
        position="relative"
        justifyContent="flex-end"
        xl={4}
      >
        <Image
          width={148}
          height={148}
          alt="picture"
          src={props.srcImageLarge}
          style={{ borderRadius: "5px", position: "absolute" }}
        />
        <Image
          width={126}
          height={126}
          alt="picture"
          src={props.srcImageSmall}
          style={{
            filter: "drop-shadow(5px 0px 35px rgba(0, 0, 0, 0.3))",
            borderRadius: "5px",
            position: "absolute",
            top: "26px",
            right: "112px",
          }}
        />
      </Grid>
    </Grid>
  );
}
