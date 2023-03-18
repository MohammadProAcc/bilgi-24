import { Box, Divider, Grid, Typography } from "@mui/material";
import { CarouselCards } from "$/ui/organisms";
import { Swiper, SwiperSlide } from "swiper/react";

// FIXME:
export function BoxCarousel(props) {
  return (
    <Grid
      container
      direction="column"
      sx={{ margin: "0 auto", ...props.sxGridMain }}
    >
      <Grid container direction="row" gap="10px" alignItems="center">
        <Typography
          sx={{ color: "#1E1E1E", fontSize: "18px", fontWeight: 400 }}
        >
          {props.carouselTitle}
        </Typography>
        <Divider
          sx={{
            height: "1px",
            width: "75%",
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
          slidesPerView={3.5}
          // centeredSlides={true}
          spaceBetween={10}
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
