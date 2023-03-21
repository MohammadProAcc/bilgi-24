import { theme } from "$/utils";
import { css } from "@emotion/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { SVGCarbonViewRightMargined } from "../atoms";
import { BreadCrumbs } from "../molecules";
import { BoxCarousel } from "./BoxCarousel";
import {
  BoxTypography,
  Modal,
  PreviewPostImagesCarousel,
  SinglePostImagesCarousel,
  TabsBoxPostSingle,
} from "./molecules";

export function PreviewPost() {
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
  const breadcrumbs = ["Real State", "Residential", "For Rent", "Apartment"];
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SVGCarbonViewRightMargined />
            <BreadCrumbs
              items={breadcrumbs}
              Style={css`
                li {
                  font-size: 0.75rem;
                }
              `}
            />
          </Box>
          <Grid
            id="title"
            container
            direction="row"
            justifyContent="space-between"
            sx={{
              [theme.breakpoints.down("md")]: {
                rowGap: "1rem",
              },
            }}
          >
            <Grid id="title-text" container direction="row" md lg xl>
              <Typography
                sx={{
                  fontSize: { xl: "24px", lg: "24px", md: "18px" },
                  fontWeight: 500,
                  color: "#1E1E1E",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SVGCarbonViewRightMargined />
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
                fontSize: { xl: "14px", lg: "14px", md: "12px" },
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
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#1E1E1E",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SVGCarbonViewRightMargined />
              Turkey, Istanbul
            </Typography>
            <Typography
              sx={{ fontSize: "18px", fontWeight: 500, color: "#1E1E1E" }}
            >
              35,000$
            </Typography>
          </Grid>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SVGCarbonViewRightMargined
              Style={css`
                margin-top: 0.25rem;
              `}
            />
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
          {/* Mobile */}
          <Grid
            id="right"
            container
            direction="column"
            alignItems="flex-end"
            gap="22px"
            md={4}
            lg={4}
            xl={4}
            sx={{
              marginTop: "1rem",
              alignItems: "center",
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            <Typography
              sx={{ fontSize: "12px", fontWeight: 400, color: "#1E1E1E" }}
            >
              Ad No 1215622
            </Typography>
            <SinglePostImagesCarousel />
            <Box>
              <Image
                width={370}
                height={190}
                alt="map-pic"
                src="/images/map-pic.png"
              />
            </Box>
          </Grid>
          <Grid container direction="row">
            <Grid container direction="column" padding="10px" gap="25px" xl>
              <BoxTypography text="M2 (groos)" number="105" isPreview />
              <BoxTypography text="M2 (net)" number="95" isPreview />
              <BoxTypography text="Number Of Rooms" number="6" isPreview />
              <BoxTypography text="Building Age" number="15" isPreview />
            </Grid>
            <Grid container direction="column" padding="10px" gap="25px" xl>
              <BoxTypography text="Number Of Floors" number="7" isPreview />
              <BoxTypography text="Floor Location" number="4" isPreview />
              <BoxTypography text="Number Of Bathrooms" number="3" isPreview />
              <BoxTypography text="Heating" number="Natural Gas" isPreview />
            </Grid>
          </Grid>
          <TabsBoxPostSingle />
        </Grid>
        {/* Desktop */}
        <Grid
          id="right"
          container
          direction="column"
          alignItems="flex-end"
          gap="22px"
          md={4}
          lg={4}
          xl={4}
          sx={{
            [theme.breakpoints.down("md")]: {
              display: "none",
              marginTop: "1rem",
              alignItems: "center",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "12px", fontWeight: 400, color: "#1E1E1E" }}
          >
            Ad No 1215622
          </Typography>
          <PreviewPostImagesCarousel />
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
