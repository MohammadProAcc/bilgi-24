import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShareIcon from "@mui/icons-material/Share";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  IconButton,
  Link,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { BoxCarousel } from "./BoxCarousel";
import { BoxTypography, Carousel, Modal, TabsBoxPostSingle } from "./molecules";

export function PostSingle() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const CustomLink = styled(Link)({
    fontSize: "10px",
    fontWeight: 400,
  });
  const breadcrumbs = [
    <CustomLink
      underline="none"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Real State
    </CustomLink>,
    <CustomLink
      underline="none"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Residential
    </CustomLink>,
    <CustomLink
      underline="none"
      key="3"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      For Rent
    </CustomLink>,
    <CustomLink
      underline="none"
      key="4"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Apartment
    </CustomLink>,
  ];
  return (
    <Grid
      id="main"
      container
      direction="column"
      sx={{
        padding: {
          xl: "71px 193px 60px 193px",
          lg: "71px 120px 60px 120px",
          md: "60px 50px 60px 50px",
        },
        gap: "55px",
      }}
    >
      <Grid id="content" container direction="row">
        <Grid
          id="left"
          container
          direction="column"
          gap="22px"
          md={8}
          lg={8}
          xl={8}
        >
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
          <Grid
            id="title"
            container
            direction="row"
            justifyContent="space-between"
          >
            <Grid id="title-text" container direction="row" md lg xl>
              <Typography
                sx={{
                  fontSize: { xl: "24px", lg: "24px", md: "18px" },
                  fontWeight: 500,
                  color: "#1E1E1E",
                }}
              >
                Apartment Best Location
              </Typography>
              <IconButton>
                <ShareIcon
                  sx={{ width: "18px", height: "20px", color: "#F5B61A" }}
                />
              </IconButton>
              <IconButton>
                <FavoriteBorderIcon
                  sx={{ width: "20px", height: "18px", color: "#F5B61A" }}
                />
              </IconButton>
            </Grid>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{
                width: { xl: "124px", lg: "124px", md: "100px" },
                height: { xl: "36px", lg: "36px", md: "26px" },
                textTransform: "none",
                fontSize: { xl: "16px", lg: "16px", md: "12px" },
                fontWeight: 500,
                color: "#011F28",
                backgroundColor: "#F5B61A",
                "&:hover": {
                  backgroundColor: "#F5B61A",
                },
              }}
              xl
              lg
              md
            >
              Contact Info
            </Button>
          </Grid>
          <Grid
            id="price"
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: 500, color: "#1E1E1E" }}
            >
              Turkey, Istanbul
            </Typography>
            <Typography
              sx={{ fontSize: "18px", fontWeight: 500, color: "#1E1E1E" }}
            >
              35,000$
            </Typography>
          </Grid>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 300,
                color: "#1E1E1E",
                textAlign: "justify",
                lineHeight: "203%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
              purus viverra accumsan in nisl nisi Arcu cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque purus viverra accumsan
              in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel
              elit nisi Arcu cursus scelerisque.
            </Typography>
          </Box>
          <Grid container direction="row">
            <Grid container direction="column" padding="10px" gap="25px" xl>
              <BoxTypography text="M2 (groos)" number="105" />
              <BoxTypography text="M2 (net)" number="95" />
              <BoxTypography text="Number Of Rooms" number="6" />
              <BoxTypography text="Building Age" number="15" />
            </Grid>
            <Grid container direction="column" padding="10px" gap="25px" xl>
              <BoxTypography text="Number Of Floors" number="7" />
              <BoxTypography text="Floor Location" number="4" />
              <BoxTypography text="Number Of Bathrooms" number="3" />
              <BoxTypography text="Heating" number="Natural Gas" />
            </Grid>
          </Grid>
          <TabsBoxPostSingle />
        </Grid>
        <Grid
          id="right"
          container
          direction="column"
          alignItems="flex-end"
          gap="22px"
          md={4}
          lg={4}
          xl={4}
        >
          <Typography
            sx={{ fontSize: "12px", fontWeight: 400, color: "#1E1E1E" }}
          >
            Ad No 1215622
          </Typography>
          <Carousel />
          <Box>
            <Image
              width={370}
              height={190}
              alt="map-pic"
              src="/images/map-pic.png"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid id="carousel" container>
        <BoxCarousel
          carouselTitle="Similar Posts"
          sxSwiperBox={{ width: "100%" }}
          sxGridMain={{ padding: 0 }}
          sxDivider={{ width: "90 %" }}
        />
        <Modal open={open} onClose={handleClose} />
      </Grid>
    </Grid>
  );
}
