import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CarouselCards } from "$/ui/organisms";
import { Swiper, SwiperSlide } from "swiper/react";

// FIXME:
export function BoxCarousel(props) {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      direction="column"
      sx={{ margin: "0 auto", ...props.sxGridMain }}
    >
      <Grid container direction="row" gap="10px" alignItems="center">
        <Typography
          sx={{
            color: "#1E1E1E",
            fontSize: `${!responsive ? "18px" : "12px"}`,
            fontWeight: 400,
          }}
        >
          {props.carouselTitle}
        </Typography>
        <Divider
          sx={{
            height: "1px",
            width: `${!responsive ? "75%" : "65%"}`,
            borderColor: "#1E1E1E",
            opacity: 0.2,
            ...props.sxDivider,
          }}
        />
      </Grid>
      <Box
        sx={{
          "& .swiper-wrapper": {
            paddingTop: "1.5rem",
            paddingBottom: "2rem",
          },
          "& .swiper-slide": {
            borderRadius: "0.625rem",
            "& .MuiGrid-root": {
              borderRadius: "0.625rem",
            },
          },
          width: "82%",
          "& .MuiGrid-root": {
            position: "relative",
            zIndex: 1,
          },
          ...props.sxSwiperBox,
        }}
      >
        <Swiper
          slidesPerView={!responsive ? 3.5 : 1.1}
          spaceBetween={10}
          centeredSlides={!responsive ? false : true}
          grabCursor={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Grid>
  );
}
